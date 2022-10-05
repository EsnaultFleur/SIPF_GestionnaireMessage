package com.sipf.api.service;

import com.sipf.api.model.Utilisateur;
import com.sipf.api.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Data;

import java.util.Optional;

@Data
@Service
public class UtilisateurService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public Optional<Utilisateur> getUtilisateur(final Long id) {
        return utilisateurRepository.findById(id);
    }
}
