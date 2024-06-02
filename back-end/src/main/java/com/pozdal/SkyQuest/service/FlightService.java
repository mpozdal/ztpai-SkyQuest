package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Limit;
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
    public List<Flight> trendingFlights() {
        return flightRepository.findAll();
    }
    public List<Flight> latestFlights() {
        return flightRepository.findAll();
    }
    public Optional<Flight> flight(Integer id) {
        return flightRepository.findById(id);
    }
    public void delete(Integer id) {
          flightRepository.deleteById(id);
    }
    public Flight save(Flight flight) {return flightRepository.save(flight);}

    public Flight update(Flight newFlight, Integer id) {
        return flightRepository.findById(id)
                .map(flight -> {
                    flight.setDepart(newFlight.getDepart());
                    flight.setArrive(newFlight.getArrive());
                    flight.setStops(newFlight.getStops());
                    flight.setUrl(newFlight.getUrl());
                    flight.setImgUrl(newFlight.getImgUrl());
                    flight.setDescription(newFlight.getDescription());
                    flight.setReturnDate(newFlight.getReturnDate());
                    flight.setDepartureDate(newFlight.getDepartureDate());
                    return flightRepository.save(flight);
                })
                .orElseGet(() -> {
                    newFlight.setId(id);
                    return flightRepository.save(newFlight);
                });
    }


}
