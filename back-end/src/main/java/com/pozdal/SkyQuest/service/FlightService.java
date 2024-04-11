package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public List<Flight> allFlights() {
        return flightRepository.findAll();
    }
    public Optional<Flight> flight(Integer id) {
        return flightRepository.findById(id);
    }

}
