package com.stackroute.knowledgevault.populator.service;


import com.stackroute.knowledgevault.domain.Treatment;

import java.util.List;

public interface TreatmentService {
    public Treatment saveTreatment(Treatment treatment) ;
    public List<Treatment> treatmentList();
}