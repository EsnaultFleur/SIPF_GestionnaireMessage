package com.sipf.api.controller;

import com.sipf.api.client.MessageActionRest;
import com.sipf.api.client.MessageRest;
import com.sipf.api.client.SipfApiUrlBuilder;
import com.sipf.api.model.Etiquette;
import com.sipf.api.model.Message;
import com.sipf.api.model.MessageAction;
import com.sipf.api.model.MessageEtiquette;
import com.sipf.api.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequestMapping(SipfApiUrlBuilder.MESSAGES)
@RestController
@Slf4j
@RequiredArgsConstructor
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private MessageActionService messageActionService;
    @Autowired
    private MessageEtiquetteService messageEtiquetteService;
    @Autowired
    private EtiquetteService etiquetteService;
    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping
    public List<MessageRest> getMessages() {
        return messageService.getMessages()
                .stream()
                .map(this::toRest)
                .collect(Collectors.toList());
    }

    @GetMapping("{id}")
    public MessageRest getMessage(@PathVariable("id") final Long id) {
        Optional<Message> message = messageService.getMessage(id);
        return message.isPresent() ? toRest(message.get()) : null;
    }

    @GetMapping("{id}/" + ConstanteLienHttp.HISTORIQUE_ACTIONS)
    public List<MessageActionRest> getMessageActions(@PathVariable("id") final Long id) {
        return messageActionService.getMessagesActionByIdMessage(id)
                .stream()
                .map(this::toActionRest)
                .collect(Collectors.toList());
    }

    @PostMapping
    public MessageRest createMessage(@RequestBody MessageRest messageRest) {
        Message messageSave = messageService.saveMessage(fromRest(messageRest));
        messageActionService.saveMessageAction(new MessageAction(null, messageSave.getId(), Long.valueOf(1), "C", LocalDateTime.now()));
        messageEtiquetteService.saveAllMessageEtiquette(messageSave.getId(), messageRest.getEtiquettes());
        return toRest(messageSave);
    }

    @PutMapping("{id}")
    public MessageRest updateMessage(@PathVariable("id") final Long id, @RequestBody MessageRest messageRest) {
        Message messageUpdate = messageService.saveMessage(buildMessage(id, messageRest));
        messageActionService.saveMessageAction(new MessageAction(null, messageUpdate.getId(), Long.valueOf(1), "M", LocalDateTime.now()));
        messageEtiquetteService.saveAllMessageEtiquette(messageUpdate.getId(), messageRest.getEtiquettes());
        return toRest(messageUpdate);
    }

    @DeleteMapping("{id}")
    public void deleteMessage(@PathVariable("id") final Long id) {
        messageActionService.saveMessageAction(new MessageAction(null, id, Long.valueOf(1), "D", LocalDateTime.now()));
    }

    private MessageRest toRest(Message message) {
        return new MessageRest(
                message.getId(),
                message.getDateDebut(),
                message.getDateFin(),
                message.getContenuHtml(),
                message.getIcone(),
                messageEtiquetteService.getEtiquettesByIdMessage(message.getId())
                        .stream()
                        .map(this::toEtiquette)
                        .collect(Collectors.toList())
        );
    }

    private Message fromRest(MessageRest messageRest) {
        return new Message(
                messageRest.getId(),
                messageRest.getDateDebut(),
                messageRest.getDateFin(),
                messageRest.getContenuHtml(),
                messageRest.getIcone()
        );
    }

    private MessageActionRest toActionRest(MessageAction messageAction) {
        return new MessageActionRest(
                messageAction.getId(),
                messageAction.getTypeAction(),
                messageAction.getDateAction(),
                utilisateurService.getUtilisateur(messageAction.getIdUtilisateur()).get()
        );
    }

    private MessageEtiquette toMessageEtiquette(Long idMessage, Long idEtiquette) {
        return new MessageEtiquette(null, idMessage, idEtiquette);
    }

    private Etiquette toEtiquette(MessageEtiquette messageEtiquette) {
        return etiquetteService.getEtiquetteById(messageEtiquette.getIdEtiquette()).get();
    }

    private Message buildMessage(Long id, MessageRest messageRest) {
        Optional<Message> message = messageService.getMessage(id);
        Message currentMessage = null;
        if (message.isPresent()) {
            currentMessage = message.get();

            LocalDateTime dateDebut = messageRest.getDateDebut();
            if (dateDebut != null) {
                currentMessage.setDateDebut(dateDebut);
            }
            LocalDateTime dateFin = messageRest.getDateFin();
            if (dateFin != null) {
                currentMessage.setDateFin(dateFin);
                ;
            }
            String contenuHtml = messageRest.getContenuHtml();
            if (contenuHtml != null) {
                currentMessage.setContenuHtml(contenuHtml);
            }
            String icone = messageRest.getIcone();
            if (icone != null) {
                currentMessage.setIcone(icone);
                ;
            }
        }
        return currentMessage;
    }
}
