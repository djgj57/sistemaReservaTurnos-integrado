package io.hus.controller.mercadoPagoController;

import io.hus.entity.mercadoPagoEntity.Notification;
import io.hus.service.mercadoPagoService.MercadoPagoService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping(value = "/api")
@RequiredArgsConstructor
public class MercadoPagoController {

    private final MercadoPagoService mercadoPagoService;

    // TODO: Guardar en la base de datos las notificaciones.
    @Operation(summary = "receive mp notifications")
    @PostMapping("/open/notification")
    public ResponseEntity<String> notification(@RequestBody Notification body) {
        mercadoPagoService.checkAccreditedPaymentAndSendEmail(body.getData().get("id"));
        return ResponseEntity.ok().build();
    }

}