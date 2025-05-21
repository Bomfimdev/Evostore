package com.evostore.controller;

import com.evostore.model.Key;
import com.evostore.service.KeyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/keys")
@RequiredArgsConstructor
@Tag(name = "Key Management", description = "API para gerenciamento de keys")
public class KeyController {

    private final KeyService keyService;

    @PostMapping
    @Operation(summary = "Criar nova key", description = "Cria uma nova key no sistema")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Key criada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Requisição inválida")
    })
    public ResponseEntity<Key> createKey(@Valid @RequestBody Key key) {
        Key createdKey = keyService.createKey(key);
        return new ResponseEntity<>(createdKey, HttpStatus.CREATED);
    }

    @GetMapping
    @Operation(summary = "Listar todas as keys", description = "Retorna uma lista com todas as keys cadastradas")
    @ApiResponse(responseCode = "200", description = "Lista de keys retornada com sucesso")
    public ResponseEntity<List<Key>> getAllKeys() {
        List<Key> keys = keyService.getAllKeys();
        return ResponseEntity.ok(keys);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar key por ID", description = "Retorna uma key específica com base no ID fornecido")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Key encontrada com sucesso"),
            @ApiResponse(responseCode = "404", description = "Key não encontrada")
    })
    public ResponseEntity<Key> getKeyById(@PathVariable Long id) {
        Key key = keyService.getKeyById(id);
        return ResponseEntity.ok(key);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir key", description = "Remove uma key do sistema")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Key removida com sucesso"),
            @ApiResponse(responseCode = "404", description = "Key não encontrada")
    })
    public ResponseEntity<Void> deleteKey(@PathVariable Long id) {
        keyService.deleteKey(id);
        return ResponseEntity.noContent().build();
    }
}