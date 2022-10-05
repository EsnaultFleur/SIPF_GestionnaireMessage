package com.sipf.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "message_action")
@NoArgsConstructor
@AllArgsConstructor
public class MessageAction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="idmessage")
    private Long idMessage;

    @Column(name="idutilisateur")
    private Long idUtilisateur;

    @Column(name="typeaction")
    private String typeAction;

    @Column(name="dateaction")
    private LocalDateTime dateAction;
}