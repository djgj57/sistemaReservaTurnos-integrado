package io.hus.entity.reservationEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.hus.entity.productEntity.Product;
import io.hus.entity.userEntity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

import static javax.persistence.GenerationType.IDENTITY;

@Builder
@Table(name = "tlb_reservations")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private LocalDate checkIn;

    private LocalDate checkOut;
    private LocalTime eta; //Estimated Time of Arrival

    private String city;

/* ************* Reservation status ************* */

/*
Accepted:       the owner has validated the reservation request. The tenant may make his payment (advance or integral) within a period of 8 days.
Rejected:       the owner rejected the renter's reservation request.
Confirmed:      the tenant made a payment (advance or integral) to block the reservation.
Initialized:    the tenant attempted a payment that was unsuccessful.
Canceled:       the tenant or owner has canceled the accepted or confirmed request.
Expired:        the departure date of the rental has expired.
*/

    private String status = "accepted";

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false, foreignKey = @ForeignKey(name = "FK_USER_ID"))
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id", nullable = false, foreignKey = @ForeignKey(name = "FK_PRODUCT_ID"))
    private Product product;



}