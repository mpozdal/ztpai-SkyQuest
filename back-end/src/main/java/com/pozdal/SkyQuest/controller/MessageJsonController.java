package com.pozdal.SkyQuest.controller;

import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.model.Restaurant;
import com.pozdal.SkyQuest.service.MessageService;
import com.pozdal.SkyQuest.service.RabbitMQJsonConsumer;
import com.pozdal.SkyQuest.service.RabbitMQJsonProducer;
import com.pozdal.SkyQuest.service.RabbitMQProducer;
import org.springframework.amqp.core.Message;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="*")
public class MessageJsonController {
    private RabbitMQJsonProducer jsonProducer;
    private MessageService messageService;

    public MessageJsonController(RabbitMQJsonProducer jsonProducer, MessageService messageService) {
        this.jsonProducer = jsonProducer;
        this.messageService = messageService;
    }

    @PostMapping("/publish")
    public ResponseEntity<String> sendJsonMessage(@RequestBody Restaurant object) {
        jsonProducer.sendJsonMessage(object);
        return ResponseEntity.ok("Json message sent to RabbitMQ...");

    }
    @GetMapping("/fetchFromQueue")
    public Message fetchFromQueue() {
        return messageService.receiveMessagesFromQueue();
    }
}
