package com.revature.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.demo.services.KafkaConsumerService;
import com.revature.demo.services.KafkaProducerService;

@RestController
@RequestMapping("/kafka")
public class KafkaProducerController {

    @Autowired
    private KafkaProducerService kafkaProducerService;

    @Autowired
    private KafkaConsumerService kafkaConsumerService;

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        // http://localhost:8080/kafka/publish?message=hello

        // Print the message to the console
        System.out.println("Message: " + message);
        kafkaProducerService.sendMessage(message);
    }

    @GetMapping("/messages")
    public List<String> getMessages() {
        // http://localhost:8080/kafka/messages
        // Retrieve messages from Kafka
        return kafkaConsumerService.getMessages();
    }
}
