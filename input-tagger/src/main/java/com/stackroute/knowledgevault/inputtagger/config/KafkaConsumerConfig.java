package com.stackroute.knowledgevault.inputtagger.config;

import com.stackroute.knowledgevault.domain.InputLemma;
import com.stackroute.knowledgevault.domain.InputPOS;
import com.stackroute.knowledgevault.domain.InputToken;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
public class KafkaConsumerConfig {

    @Bean
    public ConsumerFactory<String, Object> consumerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ConsumerConfig.GROUP_ID_CONFIG, "group_id");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

        return new DefaultKafkaConsumerFactory<>(config);
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory factory = new ConcurrentKafkaListenerContainerFactory();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }

    @Bean
    public ConsumerFactory<String, InputToken> tokenConsumerFactory(){

        Map<String, Object> config=new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"localhost:9092");
        config.put(ConsumerConfig.GROUP_ID_CONFIG,"group_json");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

        return new DefaultKafkaConsumerFactory<>(config, new StringDeserializer(),new JsonDeserializer<>(InputToken.class));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory tokenKafkaListenerFactory(){
        ConcurrentKafkaListenerContainerFactory factory=new ConcurrentKafkaListenerContainerFactory();
        factory.setConsumerFactory(tokenConsumerFactory());
        return factory;
    }

    @Bean
    public ConsumerFactory<String, InputLemma> lemmaConsumerFactory(){

        Map<String, Object> config=new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"localhost:9092");
        config.put(ConsumerConfig.GROUP_ID_CONFIG,"group_json");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

        return new DefaultKafkaConsumerFactory<>(config, new StringDeserializer(),new JsonDeserializer<>(InputLemma.class));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory lemmaKafkaListenerFactory(){
        ConcurrentKafkaListenerContainerFactory factory=new ConcurrentKafkaListenerContainerFactory();
        factory.setConsumerFactory(lemmaConsumerFactory());
        return factory;
    }

    @Bean
    public ConsumerFactory<String, InputPOS> posConsumerFactory(){

        Map<String, Object> config=new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"localhost:9092");
        config.put(ConsumerConfig.GROUP_ID_CONFIG,"group_json");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);

        return new DefaultKafkaConsumerFactory<>(config, new StringDeserializer(),new JsonDeserializer<>(InputPOS.class));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory posKafkaListenerFactory(){
        ConcurrentKafkaListenerContainerFactory factory=new ConcurrentKafkaListenerContainerFactory();
        factory.setConsumerFactory(posConsumerFactory());
        return factory;
    }
}
