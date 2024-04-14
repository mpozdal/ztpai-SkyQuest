package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.repository.AttractionRepository;
import com.pozdal.SkyQuest.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AttractionService {

    @Autowired
    private AttractionRepository attractionRepository;

    public List<Attraction> allAttraction() {
        return attractionRepository.findAll();
    }
    public Optional<Attraction> attraction(Integer id) {
        return attractionRepository.findById(id);
    }
    public void delete(Integer id) {
        attractionRepository.deleteById(id);
    }
    public void save(Attraction attraction) {attractionRepository.save(attraction);}

    public Attraction update(Attraction newAttraction, Integer id) {
        return attractionRepository.findById(id)
                .orElseGet(() -> {
                    newAttraction.setId(id);
                    return attractionRepository.save(newAttraction);
                });
    }


}
