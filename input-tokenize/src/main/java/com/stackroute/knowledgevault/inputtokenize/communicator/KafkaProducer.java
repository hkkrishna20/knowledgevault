package com.stackroute.knowledgevault.inputtokenize.communicator;

import com.stackroute.knowledgevault.domain.InputToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class KafkaProducer {

    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducer.class);

    private KafkaTemplate<String, InputToken> kafkaTemplate;

    @Autowired
    public KafkaProducer(KafkaTemplate<String, InputToken> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    private static final String TOPIC = "input-token";

    public String post(InputToken userInput) {
        LOGGER.info("posting to kafka...");
        this.kafkaTemplate.send(TOPIC, userInput);
        return "published successfully";
    }
}
