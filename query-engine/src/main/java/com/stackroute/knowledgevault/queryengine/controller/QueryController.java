package com.stackroute.knowledgevault.queryengine.controller;


import com.stackroute.knowledgevault.domain.ExtractedFileData;
import com.stackroute.knowledgevault.domain.ParaContent;
import com.stackroute.knowledgevault.queryengine.listener.KafkaConsumer;
import com.stackroute.knowledgevault.queryengine.service.ExtractedDataService;
import com.stackroute.knowledgevault.queryengine.service.ParaContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping(value="api/v1")
public class QueryController {


//    private DriverInit driver = new DriverInit("bolt://localhost:7687", "neo4j", "123456");
//    private QueryService queryService = new QueryService();
//    private static final Logger LOGGER=LoggerFactory.getLogger(com.stackroute.knowledgevault.queryEngine.controller.QueryController.class);
//

    ParaContentService paraContentService;
    ExtractedDataService extractedDataService;
    @Autowired
    public QueryController(ParaContentService paraContentService,ExtractedDataService extractedDataService) {
        this.paraContentService = paraContentService;
        this.extractedDataService=extractedDataService;
    }

    @GetMapping("/results")
    public ResponseEntity<?> getResults(){
//        Set<OutputResult> list = FrontEndData.list;
//        System.out.println(list);
        ResponseEntity<?> responseEntity = new ResponseEntity<>(KafkaConsumer.list, HttpStatus.OK);
        return responseEntity;
    }
    @GetMapping("/para/{id}")
    public ResponseEntity<?> getResults2(@PathVariable(value="id") int paraId){
     ResponseEntity responseEntity;
            Optional<ParaContent> savedList = paraContentService.getParaById(paraId);
            Integer id=savedList.get().getDocId();
            Optional<ExtractedFileData> doc=extractedDataService.getDocById(id);
            String content=doc.get().getContent();
            System.out.println("Para: "+savedList.get().getData());
            System.out.println("Contnet: "+content);
            responseEntity = new ResponseEntity<Optional<ParaContent>>(savedList, HttpStatus.OK);

        return responseEntity;
    }
}
