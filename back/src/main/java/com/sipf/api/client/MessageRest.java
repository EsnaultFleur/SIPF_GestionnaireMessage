package com.sipf.api.client;

import com.sipf.api.model.Etiquette;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
public class MessageRest {
    private Long id;
    private LocalDateTime dateDebut;
    private LocalDateTime dateFin;
    private String contenuHtml;
    private String icone;
    private List<Etiquette> etiquettes;
}
