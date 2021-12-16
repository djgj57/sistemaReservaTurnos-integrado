package io.hus.controller.reservationController;

import io.hus.entity.reservationEntity.Reservation;
import io.hus.service.emailService.EmailSenderService;
import io.hus.service.mercadoPagoService.MercadoPagoService;
import io.hus.service.mercadoPagoService.MercadoPagoServiceImpl;
import io.hus.service.productService.ProductService;
import io.hus.service.reservationService.ReservationService;
import io.hus.service.userService.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
public class ReservationController {

    private final ReservationService reservationService;
    private final UserService userService;
    private final EmailSenderService emailSenderService;
    private final ProductService productService;
    private final MercadoPagoService mercadoPagoService;

    // TODO: Debe tener seguridad
    @Operation(summary = "Get a reservation by id")
    @GetMapping(value = "/reservationid/{id}")
    public ResponseEntity<Reservation> getReservation(@PathVariable("id") Long id) {
        Optional<Reservation> reservation = reservationService.findReservationById(id);
        if (reservation.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(reservation.get());
    }

    @Operation(summary = "Search reservations by user token")
    @GetMapping("/reservations")
    public ResponseEntity<List<Reservation>> getReservations(@RequestHeader String Authorization) throws Exception {
        List<Reservation> reservations;
        reservations = reservationService.findByUser(userService.getUserByToken(Authorization));
        return ResponseEntity.ok().body(reservations);
    }

    @Operation(summary = "Search reservations by productId")
    @GetMapping("/open/reservations/{id}")
    public ResponseEntity<List<Reservation>> getReservationsByProductId(@PathVariable("id") Long id) {
        List<Reservation> reservations;
        reservations = reservationService.findByProductId(id);
        if (reservations.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        reservations.forEach(reservation -> reservation.setUser(null));
        reservations.forEach(reservation -> reservation.setProduct(null));
        reservations.forEach(reservation -> reservation.setCity(null));
        return ResponseEntity.ok().body(reservations);
    }

    // TODO: Crear regla para que no se crucen las fechas de una misma reserva. el control
    //  actualmente solo esta en el front.
    @Operation(summary = "Create a new reservation")
    @PostMapping(value = "/reservation/save")
    public ResponseEntity<?> createReservation(@RequestBody Reservation reservation,
                                                         @RequestHeader String Authorization) throws Exception {
        if (reservation.getCheckIn() == null || reservation.getCheckOut() == null || reservation.getCheckIn().isAfter(reservation.getCheckOut()) || reservation.getProduct().getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        reservation.setId(null);
        reservation.getUser().setId(userService.getUserByToken(Authorization).getId());

        Reservation reservationCreate = reservationService.createReservation(reservation);

        // Start payment flow.

        String sandboxInitPoint = mercadoPagoService.createPreference(reservationCreate.getId());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(sandboxInitPoint);
    }

    // TODO: Validar, que quien solicita la url de pago sea el usuario dueno de la reserva
    // TODO: Validar, que la reserva no este pagada
    @Operation(summary = "Get payment URL")
    @GetMapping(value = "/open/reservation/payment/{id}")

    public ResponseEntity<?> getPaymentURL(@PathVariable("id") Long id) throws Exception {

        if (reservationService.findReservationById(id).isEmpty() || reservationService.findReservationById(id).get().getStatus().equals("confirmed")) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        }
        // Start payment flow.

        String sandboxInitPoint = mercadoPagoService.createPreference(id);

        return ResponseEntity.status(HttpStatus.OK)
                .body(sandboxInitPoint);
    }

}
