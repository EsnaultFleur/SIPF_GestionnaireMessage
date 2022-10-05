package com.sipf.api.controller;

import com.sipf.api.model.Utilisateur;
import com.sipf.api.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/api/utilisateur-connecte/")
    public Utilisateur getUtilisateurConnecte() {
        Optional<Utilisateur> message = utilisateurService.getUtilisateur(1L);
        return message.isPresent() ? message.get() : null;
    }
}
