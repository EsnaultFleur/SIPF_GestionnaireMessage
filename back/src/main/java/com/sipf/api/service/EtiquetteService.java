package com.sipf.api.service;

import com.sipf.api.model.Etiquette;
import com.sipf.api.repository.EtiquetteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Data;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Data
@Service
public class EtiquetteService {
    @Autowired
    private EtiquetteRepository etiquetteRepository;

    public List<Etiquette> getEtiquettes() {
        return StreamSupport
                .stream(etiquetteRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Optional<Etiquette> getEtiquetteById(Long idEtiquette) {
        return etiquetteRepository.findById(idEtiquette);
    }

    public Etiquette saveEtiquette(Etiquette etiquette) {
        return etiquetteRepository.save(etiquette);
    }
}
