package io.hus;

import com.mercadopago.MercadoPago;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
public class HusApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(HusApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
//        MercadoPago.SDK.setAccessToken(System.getenv("MP_ACCESS_TOKEN"));
        MercadoPago.SDK.setAccessToken("TEST-3694535164513886-112514-ab4168385b07c5535db09838ae09a266-1026201779");

    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
