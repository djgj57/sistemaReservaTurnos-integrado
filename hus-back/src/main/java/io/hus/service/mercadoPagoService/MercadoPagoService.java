package io.hus.service.mercadoPagoService;

import com.mercadopago.exceptions.MPException;

public interface MercadoPagoService {
    public String createPreference(Long reservationId) throws MPException;
    public void checkAccreditedPaymentAndSendEmail(String paymentId);
}
