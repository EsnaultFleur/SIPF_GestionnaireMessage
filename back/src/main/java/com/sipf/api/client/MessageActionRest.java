package com.sipf.api.client;

import com.sipf.api.model.Etiquette;
import com.sipf.api.model.Utilisateur;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MessageActionRest {
    private Long id;
    private String typeAction;
    private LocalDateTime date;
    private Utilisateur utilisateur;
}
