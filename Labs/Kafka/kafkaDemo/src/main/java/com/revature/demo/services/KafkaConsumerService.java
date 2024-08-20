package com.revature.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    //Logger
    private final Logger logger = LoggerFactory.getLogger(KafkaConsumerService.class);
    private final List<String> messages = new ArrayList<>();

    //Now we need a method that allows us to listen for the kafka message
    @KafkaListener(topics = "test")
    public void consume(String message) {
        messages.add(message);
        logger.info("Message received ->" + message);
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }

}
