package com.sipf.api.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "etiquette")
public class Etiquette {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="libelle")
    private String libelle;
}