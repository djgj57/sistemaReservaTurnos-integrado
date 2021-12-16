package io.hus.entity.mercadoPagoEntity;

import lombok.Data;

import java.util.HashMap;

@Data
public class Notification {
    private HashMap<String, String> data;
    private String status; // should be "approved"
    private String status_detail; // should be "accredited"
    private int transaction_amount; // should be "regular_payment"
}
