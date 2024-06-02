package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.model.Restaurant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQJsonConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitMQConsumer.class);
    private RestaurantService restaurantService;

    public RabbitMQJsonConsumer(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @RabbitListener(queues = {"${spring.rabbitmq.queue.json.name}"})
    public void consumeJsonMessage(Restaurant object) {
       try {
           LOGGER.info(String.format("Received message ->  %s", object.toString()));
           restaurantService.save(object);
       } catch (Exception e) {
           e.printStackTrace();
       }
    }
}
