package com.evostore.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "sessions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "key_id", nullable = false)
    @JsonIgnoreProperties("sessions")
    private Key key;

    @NotNull(message = "Data de início não pode ser nula")
    private LocalDateTime inicio;

    @NotNull(message = "Data de fim não pode ser nula")
    private LocalDateTime fim;
}