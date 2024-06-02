package com.pozdal.SkyQuest.service;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    private final RabbitTemplate rabbitTemplate;

    @Autowired
    public MessageService(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public  Message receiveMessagesFromQueue() {
       return rabbitTemplate.receive("${spring.rabbitmq.queue.json.name}");

    }
}
