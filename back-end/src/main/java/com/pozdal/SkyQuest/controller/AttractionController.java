package com.pozdal.SkyQuest.controller;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.service.AttractionService;
import com.pozdal.SkyQuest.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/api/v1")
@CrossOrigin
public class AttractionController {

    @Autowired
    private AttractionService attractionService;
    @GetMapping("/attraction")

    public ResponseEntity<List<Attraction>> getAllAttractions() {
        return ResponseEntity.ok(attractionService.allAttraction());
    }
    @GetMapping("/attraction/{id}")

    public ResponseEntity<Optional<Attraction>> getAttraction(@PathVariable Integer id) {
        return ResponseEntity.ok(attractionService.attraction(id));
    }
    @PostMapping("/attraction")
    public void addAttraction(@RequestBody Attraction newAttraction) {
        attractionService.save(newAttraction);
    }
    @DeleteMapping("/attraction/{id}")
    public void deleteAttraction(@PathVariable Integer id) {
         attractionService.delete(id);
    }
    @PutMapping("/attraction/{id}")
    public Attraction updateAttraction(@RequestBody Attraction newAttraction, @PathVariable Integer id) {
        return attractionService.update(newAttraction, id);

    }


}
