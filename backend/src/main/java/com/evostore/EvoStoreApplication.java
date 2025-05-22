package com.evostore;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
    info = @Info(
        title = "EvoStore API",
        version = "1.0",
        description = "API para gerenciamento de keys e sessões da EvoStore"
    )
)
public class EvoStoreApplication {
    public static void main(String[] args) {
        SpringApplication.run(EvoStoreApplication.class, args);
    }
}