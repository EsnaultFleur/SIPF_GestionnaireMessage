package com.sipf.api.repository;

import com.sipf.api.model.MessageAction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageActionRepository extends CrudRepository<MessageAction, Long> {
}