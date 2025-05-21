package com.evostore.controller;

import com.evostore.model.Session;
import com.evostore.service.SessionService;
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
@RequestMapping("/sessions")
@RequiredArgsConstructor
@Tag(name = "Session Management", description = "API para gerenciamento de sessões")
public class SessionController {

    private final SessionService sessionService;

    @PostMapping
    @Operation(summary = "Criar nova sessão", description = "Cria uma nova sessão para uma key específica")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Sessão criada com sucesso"),
            @ApiResponse(responseCode = "400", description = "Requisição inválida"),
            @ApiResponse(responseCode = "404", description = "Key não encontrada")
    })
    public ResponseEntity<Session> createSession(@Valid @RequestBody Session session, @RequestParam Long keyId) {
        Session createdSession = sessionService.createSession(session, keyId);
        return new ResponseEntity<>(createdSession, HttpStatus.CREATED);
    }

    @GetMapping("/{keyId}")
    @Operation(summary = "Buscar sessões por key", description = "Retorna todas as sessões de uma key específica")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Lista de sessões retornada com sucesso"),
            @ApiResponse(responseCode = "404", description = "Key não encontrada")
    })
    public ResponseEntity<List<Session>> getSessionsByKeyId(@PathVariable Long keyId) {
        List<Session> sessions = sessionService.getSessionsByKeyId(keyId);
        return ResponseEntity.ok(sessions);
    }

    @GetMapping("/details/{id}")
    @Operation(summary = "Buscar sessão por ID", description = "Retorna detalhes de uma sessão específica")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Sessão encontrada com sucesso"),
            @ApiResponse(responseCode = "404", description = "Sessão não encontrada")
    })
    public ResponseEntity<Session> getSessionById(@PathVariable Long id) {
        Session session = sessionService.getSessionById(id);
        return ResponseEntity.ok(session);
    }
}