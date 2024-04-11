package com.pozdal.SkyQuest.controller;

import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.repository.FlightRepository;
import com.pozdal.SkyQuest.service.FlightService;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/api/v1/flight")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping
    public ResponseEntity<List<Flight>> getAllFlights() {
        return ResponseEntity.ok(flightService.allFlights());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Flight>> getFlight(@PathVariable Integer id) {
        return ResponseEntity.ok(flightService.flight(id));
    }


}
