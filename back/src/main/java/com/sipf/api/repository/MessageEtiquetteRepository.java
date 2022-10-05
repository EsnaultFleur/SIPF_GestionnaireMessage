package com.sipf.api.repository;

import com.sipf.api.model.MessageEtiquette;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageEtiquetteRepository extends CrudRepository<MessageEtiquette, Long> {
}