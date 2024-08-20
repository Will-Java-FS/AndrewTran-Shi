package com.revature.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.demo.services.KafkaProducerService;

@RestController
@RequestMapping("/kafka")
public class KafkaProducerController {

    @Autowired
    private KafkaProducerService kafkaProducerService;

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        // http://localhost:8080/kafka/publish?message=hello

        // Let's print the message to the console for now
        System.out.println("Message: " + message);
        kafkaProducerService.sendMessage(message);
    }
}
