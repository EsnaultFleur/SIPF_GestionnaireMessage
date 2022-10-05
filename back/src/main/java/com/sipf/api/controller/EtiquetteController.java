package com.sipf.api.controller;

import com.sipf.api.client.SipfApiUrlBuilder;
import com.sipf.api.model.Etiquette;
import com.sipf.api.service.EtiquetteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(SipfApiUrlBuilder.ETIQUETTES)
@RestController
@Slf4j
@RequiredArgsConstructor
public class EtiquetteController {

    @Autowired
    private EtiquetteService etiquetteService;

    @GetMapping
    public List<Etiquette> getEtiquettes() {
        return etiquetteService.getEtiquettes();
    }


    @PostMapping
    public Etiquette createEtiquette(@RequestBody Etiquette etiquette) {
        return etiquetteService.saveEtiquette(etiquette);
    }
}
