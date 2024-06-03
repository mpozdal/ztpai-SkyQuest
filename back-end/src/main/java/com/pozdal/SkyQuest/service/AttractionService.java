package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.model.User;
import com.pozdal.SkyQuest.repository.AttractionRepository;
import com.pozdal.SkyQuest.repository.FlightRepository;
import com.pozdal.SkyQuest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class AttractionService {

    @Autowired
    private AttractionRepository attractionRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Attraction> allAttraction() {
        return attractionRepository.findAll();
    }
    public Optional<Attraction> attraction(Integer id) {
        return attractionRepository.findById(id);
    }

    public List<Attraction> getFilterAttraction(String city, String category) {
        if (city != null && category != null) {
            return attractionRepository.findByCityAndCategory(city, category);
        } else if (city != null) {
            return attractionRepository.findByCity(city);
        } else if (category != null) {
            return attractionRepository.findByCategory(category);
        } else {
            return attractionRepository.findAll();
        }
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
