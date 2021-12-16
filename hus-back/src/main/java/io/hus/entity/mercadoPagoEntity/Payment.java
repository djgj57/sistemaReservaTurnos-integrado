package io.hus.entity.mercadoPagoEntity;

import com.mercadopago.resources.datastructures.payment.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.maven.artifact.repository.metadata.Metadata;

import java.time.OffsetDateTime;
import java.util.HashMap;

@Data @NoArgsConstructor @AllArgsConstructor
public class Payment {
    private HashMap<?,?> additional_info;
    private String status;
    private String status_detail;
    private Integer transaction_amount;
}
