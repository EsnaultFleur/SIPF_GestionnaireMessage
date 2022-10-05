package com.sipf.api.repository;

import com.sipf.api.model.Etiquette;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtiquetteRepository  extends CrudRepository<Etiquette, Long> {
}