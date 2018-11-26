package com.stackroute.knowledgevault.inputtagger.communicator;

import com.stackroute.knowledgevault.domain.InputLemma;
import com.stackroute.knowledgevault.domain.InputObject;
import com.stackroute.knowledgevault.domain.InputPOS;
import com.stackroute.knowledgevault.inputtagger.utils.Processor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;


@Service
public class KafkaConsumer {

    //to log data on the console
    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaConsumer.class);

    private InputObject inputObject;
    @Autowired
    private Processor processor;

    @Autowired
    private KafkaProducer producer;
    /*
     * This method consumes data from kafka server and makes call to kafka producer.
     */
    @KafkaListener(topics = "input-POS", groupId = "group_json_tag_POS", containerFactory = "posKafkaListenerFactory")
    public void consumejson(InputPOS inputPOS){
        LOGGER.info("inside KafkaConsumer.consumejson()");
        LOGGER.info("TaggerPOSUserInput: {}",inputPOS.toString());
        if(inputObject == null) {
            LOGGER.info("inside KafkaConsumer.consumejson().if()");
            inputObject = new InputObject(inputPOS.getId());
            inputObject.setPoses(inputPOS.getPoses());
        }
        else {
            LOGGER.info("inside KafkaConsumer.consumejson().else");
            inputObject.setPoses(inputPOS.getPoses());
            producer.post(processor.process(inputObject));
        }

    }

    @KafkaListener(topics = "input-lemma", groupId = "group_json_tag_lemma", containerFactory = "lemmaKafkaListenerFactory")
    public void consumejson(InputLemma inputLemma){
        LOGGER.info("inside lemma KafkaConsumer.consumejson()");
        LOGGER.info("TaggerLemmaUserInput: {}",inputLemma.toString());
        if(inputObject == null) {
            LOGGER.info("inside lemma KafkaConsumer.consumejson().if()");
            inputObject = new InputObject(inputLemma.getId());
            inputObject.setLemmas(inputLemma.getLemmas());
        }
        else {
            LOGGER.info("inside lemma KafkaConsumer.consumejson().else");
            inputObject.setLemmas(inputLemma.getLemmas());

            producer.post(processor.process(inputObject));
        }
    }
//
//    @KafkaListener(topics = "input-token", groupId = "group_json", containerFactory = "tokenKafkaListenerFactory")
//    public void consumejson(InputToken inputToken){
//        LOGGER.info("TaggerLemmaUserInput: {}",inputToken.toString());
//    }


}