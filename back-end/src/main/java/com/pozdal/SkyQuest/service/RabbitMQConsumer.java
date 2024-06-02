package com.pozdal.SkyQuest.service;

import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;

@Service
public class RabbitMQConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitMQConsumer.class);

    @RabbitListener(queues = {"${spring.rabbitmq.queue.name}"})
    public void consume(String message) {
        LOGGER.info(String.format("Received message ->  %s", message));
    }
}
