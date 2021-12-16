package io.hus.service.mercadoPagoService;

import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.Preference;
import com.mercadopago.resources.datastructures.preference.BackUrls;
import com.mercadopago.resources.datastructures.preference.Item;
import com.mercadopago.resources.datastructures.preference.Payer;
import io.hus.entity.categoryEntity.Category;
import io.hus.entity.mercadoPagoEntity.Payment;
import io.hus.entity.productEntity.Product;
import io.hus.entity.reservationEntity.Reservation;
import io.hus.service.categoryService.CategoryService;
import io.hus.service.emailService.EmailSenderService;
import io.hus.service.productService.ProductService;
import io.hus.service.reservationService.ReservationService;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.http.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;

import static java.time.temporal.ChronoUnit.DAYS;

@Service
@RequiredArgsConstructor
public class MercadoPagoServiceImpl implements MercadoPagoService {

    final static Logger log = Logger.getLogger(MercadoPagoServiceImpl.class);

    public static final float PRICE_PER_NIGHT = 10000;

    private final ReservationService reservationService;
    private final ProductService productService;
    private final CategoryService categoryService;
    private final EmailSenderService emailSenderService;

    @Override
    public String createPreference(Long reservationId) throws MPException {
        log.info("Creating preference for reservation: " + reservationId);
        Optional<Reservation> reservation = reservationService.findReservationById(reservationId);
        if (reservation.isPresent()) {

            Preference preference = new Preference();

            String urlBack = (ServletUriComponentsBuilder.fromCurrentContextPath().toUriString());
//            String url = "http://localhost:8080";

            String urlFront = "http://18.232.222.109:3000";

            preference.setBackUrls(
                    new BackUrls().setFailure(urlFront + "/failure")
                            .setPending(urlFront + "/pending")
                            .setSuccess(urlFront + "/success")
            );

            preference.setNotificationUrl(urlBack + "/api/open/notification");

            // Temporal endpoint to test
//            preference.setNotificationUrl("https://hookb.in/je26nZokR7T9dlMMdXgP");

            // info for the item
            Long productId = reservation.get().getProduct().getId();
            Long userId = reservation.get().getUser().getId();
            LocalDate checkIn = reservation.get().getCheckIn();
            LocalDate checkOut = reservation.get().getCheckOut();
            Optional<Product> product = productService.getProduct(productId);
            Category category = categoryService.getCategory(product.get().getCategory().getId());

            Item item = new Item();
            item.setTitle(product.get().getName())
                    .setId(reservation.get().getId().toString())
                    .setQuantity((int) DAYS.between(checkIn, checkOut))
                    .setCategoryId(category.getTitle())
                    .setUnitPrice(product.get().getPrice()) // El valor de unit_price debe ser entero.
                    .setCurrencyId("ARS")
                    .setDescription("nights");
            preference.appendItem(item);

            // Set a test payer
            Payer payer = new Payer();
            payer.setEmail("test_user_14545742@testuser.com");
            preference.setPayer(payer);


            var result = preference.save();

            System.out.println(result.getSandboxInitPoint());
            return result.getSandboxInitPoint();
        } else {
            return null;
        }
    }

    @Override
    public void checkAccreditedPaymentAndSendEmail(String paymentId) {

        String url = "https://api.mercadopago.com/v1/payments/" + paymentId;
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth("TEST-3694535164513886-112514-ab4168385b07c5535db09838ae09a266-1026201779");
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<?> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity,
                String.class);

        Gson gson = new Gson();
        Payment payment = gson.fromJson(responseEntity.getBody().toString(), Payment.class);

        ArrayList items = (ArrayList) payment.getAdditional_info().get("items");
        LinkedTreeMap item = (LinkedTreeMap) items.get(0);


        // info to send email
        Optional<Reservation> reservation = reservationService.findReservationById(Long.parseLong(item.get("id").toString()));
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(reservation.get().getUser().getUsername());
        mailMessage.setSubject("Reservation information - happy hus stay.");
        mailMessage.setFrom("hus.group5@gmail.com");

        if (payment.getStatus().equals("approved") && payment.getStatus_detail().equals(
                "accredited")) {

            // Change status of reservation to confirmed

           reservationService.updateStatus(reservation.get().getId(), "confirmed");

            // Send reservation email to user

            mailMessage.setText("You have a new reservation.\n"
                    +
                    "Product: " + reservation.get().getProduct().getName() +
                    "\n"
                    +
                    "Check in: " + reservation.get().getCheckIn() + "\n"
                    +
                    "Check out: " + reservation.get().getCheckOut() + "\n"
                    +
                    "Reservation id: " + reservation.get().getId() + "\n"
                    +
                    "City of origin: " + reservation.get().getCity() + "\n"
                    +
                    "Price: $" + item.get("unit_price") + "\n" +
                    "Total: $" + payment.getTransaction_amount() + " for " + item.get("quantity") + " nights" + "\n"
                    +
                    "Phone: + 01 - 888 8888 888 " + "\n" + "\n" + "\n" +

                    "Any information please contact by email hus.group5@gmail.com" + "\n"
                    + "Happy hus stay."
            );
            System.out.println(mailMessage.getText());
            emailSenderService.sendEmail(mailMessage);

        } else {

            mailMessage.setText("Something went wrong with your reservation. try later or contact us."+ "\n" +
                    "Hus" +
                    "Phone: + 01 - 888 8888 888 " + "\n" +
                    "Email: hus.group5@gmail.com" + "\n"
            );
            System.out.println(mailMessage.getText());
            emailSenderService.sendEmail(mailMessage);

        }
    }
}
