package com.sipf.api.service;

import com.sipf.api.model.Etiquette;
import com.sipf.api.model.MessageAction;
import com.sipf.api.model.MessageEtiquette;
import com.sipf.api.repository.MessageEtiquetteRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Data
@Service
public class MessageEtiquetteService {
    @Autowired
    private MessageEtiquetteRepository messageEtiquetteRepository;

    public List<MessageEtiquette> getEtiquettesByIdMessage(Long idMessage) {
        List<MessageEtiquette> messagesEtiquettes =  StreamSupport
                .stream(messageEtiquetteRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return messagesEtiquettes.stream()
                .filter(messageEtiquette -> messageEtiquette.getIdMessage().equals(idMessage))
                .collect(Collectors.toList());
    }

    public void saveAllMessageEtiquette(Long idMessage, List<Etiquette> etiquettes) {
        messageEtiquetteRepository.deleteAll(getEtiquettesByIdMessage(idMessage));
        List<MessageEtiquette> list = new ArrayList<>();
        for (Etiquette etiquette : etiquettes) {
            MessageEtiquette newMessageEtiquette = new MessageEtiquette(null, idMessage, etiquette.getId());
            list.add(newMessageEtiquette);
        }
        messageEtiquetteRepository.saveAll(list);
    }
}
