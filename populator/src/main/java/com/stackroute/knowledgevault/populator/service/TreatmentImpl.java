package com.stackroute.knowledgevault.populator.service;

import com.stackroute.knowledgevault.domain.Treatment;
import com.stackroute.knowledgevault.populator.repository.TreatmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreatmentImpl implements TreatmentService {
    private TreatmentRepo treatmentRepo;
    @Autowired
    public TreatmentImpl(TreatmentRepo treatmentRepo){
        this.treatmentRepo=treatmentRepo;
    }
    @Override
    public Treatment saveTreatment(Treatment treatment) {
        return treatmentRepo.save(treatment);
    }
    @Override
    public List<Treatment> treatmentList() {
        List<Treatment> treatmentList = (List)treatmentRepo.findAll();
        return treatmentList;
    }
}