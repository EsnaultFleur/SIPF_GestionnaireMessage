package com.sipf.api.service;

import com.sipf.api.client.MessageRest;
import com.sipf.api.model.Message;
import com.sipf.api.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Data;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Data
@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getMessages() {
        return StreamSupport
                .stream(messageRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Optional<Message> getMessage(final Long id) {
        return messageRepository.findById(id);
    }

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }
}
