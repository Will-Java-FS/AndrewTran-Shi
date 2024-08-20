package com.revature.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.revature.models.Order;

@Service
public class ShippingService {

    //Logger
    private final Logger logger = LoggerFactory.getLogger(ShippingService.class);

    //Now we need a method that allows us to listen for the kafka message
    @KafkaListener(topics = "orders", groupId = "order-listeners-3", concurrency = "3")
    public void createShippingLabel(Order order) {

        logger.info("Order received: Create shipping label for " + order.getEmail());
    }

    //What about the item in general? We need to have the fulfillment center get the items and pack them up
    @Autowired
    private KafkaTemplate<String, Order> kafkaTemplate;

    @KafkaListener(topics = "orders", groupId = "order-listeners-2")
    public void createWorkOrder(Order order) {
        // Log item names and quantities
        order.getCart().forEach(item
                -> logger.info("Item Name: {}, Quantity: {}", item.getName(), item.getQuantity())
        );

        // Log the entire cart
        logger.info("Telling the center to package the following items: {}", order.getCart());

        // Send the order to another Kafka topic
        kafkaTemplate.send("work-orders", order);
    }

}
