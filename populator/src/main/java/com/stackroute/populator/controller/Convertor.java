package com.stackroute.populator.controller;

import com.github.jsonldjava.core.JsonLdOptions;
import com.github.jsonldjava.core.JsonLdProcessor;
import com.github.jsonldjava.utils.JsonUtils;
import com.stackroute.populator.domain.*;
import com.stackroute.populator.repository.MedicalConditionRepo;
import com.stackroute.populator.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.*;

@RestController
@RequestMapping("/api/v1")
public class Convertor {
    @Autowired
    private MedicalConditionService medicalConditionService;
    @Autowired
    private CauseService causeService;
    @Autowired
    private AnatomyService anatomyService;
    @Autowired
    private SymptomService symptomService;
    @Autowired
    private TreatmentService treatmentService;
//    @Autowired
//    public Convertor(MedicalConditionService medicalConditionService, CauseService causeService) {
//        this.medicalConditionService = medicalConditionService;
//        this.causeService = causeService;
//    }

    @GetMapping("")
    public void parse() throws IOException {
        ResponseEntity responseEntity;
        InputStream inputStream = new FileInputStream("populator/src/main/Docs/input.json");
        Object jsonObject = JsonUtils.fromInputStream(inputStream);
        Map context = new HashMap();
        JsonLdOptions options = new JsonLdOptions();
        Object compact = JsonLdProcessor.compact(jsonObject, context, options);
        System.out.println(JsonUtils.toPrettyString(compact));
        String symptomName="",symptomType="";
        Long symptomId=0L;
        Map<String, Object> root = (Map) jsonObject;
        String type=(String) root.get("@type");
        String name=(String)root.get("alternateName");
        Map<String,String> anatomyMap= (Map<String, String>) root.get("associatedAnatomy");
        String anatomyName=anatomyMap.get("name");
        String anatomyType=anatomyMap.get("@type");
//        anatomyMap.put("name","sdf");
//        root.put("assano",anatomyMap);
        Long anatomyId=1L;
        anatomyService.saveAnatomy(new Anatomy(anatomyId,anatomyType,anatomyName));
        Map<String,String> codeMap= (Map<String, String>) root.get("code");
        Map<String,List> differentialDiagnosis= (Map<String, List>) root.get("differentialDiagnosis");
        List<Map<String,String>> distinguishingSignList=differentialDiagnosis.get("distinguishingSign");
        Iterator signIterator = distinguishingSignList.iterator();
        List<Symptom> symptomList=new ArrayList<>();
        while(signIterator.hasNext()){
            Map<String,String> sym= (Map<String, String>) signIterator.next();
            symptomName=sym.get("name");
            symptomType=sym.get("@type");
            symptomId++;
            Symptom symptom=new Symptom(symptomId,symptomType,symptomName);
            symptomService.saveSymptom(symptom);
            symptomList.add(symptom);
        }

        List<Map<String,Object>> treatment= (List<Map<String, Object>>) root.get("possibleTreatment");
        Iterator treatmentIterator=treatment.iterator();
        String treatmentName="",treatmentType="";
        Long treatmentId=0L;
        List<Treatment> treatmentList=new ArrayList<>();
        while(treatmentIterator.hasNext()){
            Map<String,Object> stringObjectMap= (Map<String, Object>) treatmentIterator.next();
            treatmentName= (String) stringObjectMap.get("name");
            treatmentType= (String) stringObjectMap.get("@type");
            treatmentId++;
            ArrayList<Map<String,String>> dose= (ArrayList<Map<String, String>>) stringObjectMap.get("DoseSchedule");
            String doseUnit=dose.get(0).get("doseUnit");
            String freq=dose.get(0).get("frequency");
            Treatment treatment1=new Treatment(treatmentId,treatmentType,treatmentName,doseUnit,freq);
            treatmentService.saveTreatment(treatment1);
            treatmentList.add(treatment1);
        }

        Long id=1L;

        ArrayList<Map<String, String>> causeList = (ArrayList<Map<String, String>>) root.get("cause");
        Iterator mapIterator = causeList.iterator();
        String causeName="",causeType="";
        Long causeId=0L;
        List<Cause> causeList1=new ArrayList<>();
        while (mapIterator.hasNext()) {
            Map<String,String> causeMap = (Map<String, String>) mapIterator.next();
            causeName=(String)causeMap.get("name");
            causeType = (String) causeMap.get("@type");
            causeId++;
            Cause cause=new Cause(causeId,causeType,causeName);
            causeService.saveCause(cause);
            causeList1.add(cause);
        }
        medicalConditionService.saveCondition(new MedicalCondition(id,type,name,causeList1));
    }
}