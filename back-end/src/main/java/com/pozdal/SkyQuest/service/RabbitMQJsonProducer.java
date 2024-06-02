package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.model.Restaurant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQJsonProducer {

    @Value("${spring.rabbitmq.exchange.name}")
    private String exchange;

    @Value("${spring.rabbitmq.routing.json.key}")
    private String jsonRoutingKey;

    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitMQConsumer.class);
    private RabbitTemplate rabbitTemplate;

    public RabbitMQJsonProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendJsonMessage(Restaurant object) {
        LOGGER.info(String.format("Json message sent -> %s", object.toString()));
        rabbitTemplate.convertAndSend(exchange, jsonRoutingKey, object);
    }
}
