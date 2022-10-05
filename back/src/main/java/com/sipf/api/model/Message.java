package com.sipf.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "message")
@NoArgsConstructor
@AllArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="datedebut")
    private LocalDateTime dateDebut;

    @Column(name="datefin")
    private LocalDateTime dateFin;

    @Column(name="contenuhtml")
    private String contenuHtml;

    @Column(name="icone")
    private String icone;
}