package com.sipf.api.service;

import com.sipf.api.model.Message;
import com.sipf.api.model.MessageAction;
import com.sipf.api.repository.MessageActionRepository;
import com.sipf.api.repository.MessageRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Data
@Service
public class MessageActionService {
    @Autowired
    private MessageActionRepository messageActionRepository;

    public List<MessageAction> getMessagesActionByIdMessage(Long idMessage) {
        List<MessageAction> actions = StreamSupport
                .stream(messageActionRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return actions.stream()
                .filter(action -> action.getIdMessage().equals(idMessage))
                .collect(Collectors.toList());
    }

    public MessageAction saveMessageAction(MessageAction messageAction) {
        return messageActionRepository.save(messageAction);
    }
}
