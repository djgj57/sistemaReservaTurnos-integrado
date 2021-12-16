package io.hus.entity.productEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.hus.entity.categoryEntity.Category;
import io.hus.entity.cityEntity.City;
import io.hus.entity.featureEntity.Feature;
import io.hus.entity.imageEntity.Image;
import io.hus.entity.reservationEntity.Reservation;
import io.hus.entity.userEntity.Role;
import io.hus.entity.userEntity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tbl_products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    /* ***************** attributes ***************** */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinTable(
            name = "tbl_product_feature",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "feature_id")
    )
    private Set<Feature> features;

    @OneToMany(fetch = FetchType.EAGER, orphanRemoval = true)
    @Column(unique = true)
    private Set<Image> images;

    @ManyToOne
    private Category category;

    @ManyToOne
    private City city;

    private Boolean available = true;

    private String address = "not available";

    private String houseRules =         "Ckeck-out: 10:00\n" +
                                        "No se permiten fiestas.\n" +
                                        "No fumar.";

    private String healthAndSafety =    "Se aplican las pautas de distanciamiento social y otras " +
                                        "normas relacionadas con el coronavirus.\n" +
                                        "Detector de humo.\n" +
                                        "Depósito de seguridad";

    private String cancellationPolicy = "Agrega las fechas de tu viaje para obtener los detalles " +
                                        "de cancelación de esta estadía.\n" +
                                        "72 horas límites para la cancelación\n" +
                                        "El lugar se reserva todo los derechos";

    private Double latitude = 109.703463;

    private Double longitude = -89.889934;

    private Float price = 10000F;

    @Max(value = 5) @Min(value = 0)
    private double score; // de 1 a 5

    @Transient
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Reservation> reservations;

}