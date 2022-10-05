package com.sipf.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Data
@Entity
@Table(name = "message_etiquette")
@NoArgsConstructor
@AllArgsConstructor
public class MessageEtiquette {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NaturalId
    @Column(name="idmessage")
    private Long idMessage;

    @NaturalId
    @Column(name="idetiquette")
    private Long idEtiquette;
}