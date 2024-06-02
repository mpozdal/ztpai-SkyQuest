package com.pozdal.SkyQuest.controller;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Restaurant;
import com.pozdal.SkyQuest.repository.RestaurantRepository;
import com.pozdal.SkyQuest.service.AttractionService;
import com.pozdal.SkyQuest.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/api/v1")
@CrossOrigin
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;
    @GetMapping("/restaurant")
    public ResponseEntity<List<Restaurant>> getAllRestaurants() {
        return ResponseEntity.ok(restaurantService.allAttraction());
    }
    @GetMapping("/restaurant-confirmed")
    public ResponseEntity<List<Restaurant>> getConfirmedRestaurants() {
        return ResponseEntity.ok(restaurantService.getConfirmedRestaurants());
    }
    @PostMapping("/restaurant-user")
    public ResponseEntity<List<Restaurant>> getMyRestaurant(@RequestParam String email) {

        return ResponseEntity.ok(restaurantService.getUserPendingRestaurants(email));
    }
    @GetMapping("/restaurant-pending")
    public ResponseEntity<List<Restaurant>> getPendingRestaurants() {
        return ResponseEntity.ok(restaurantService.getPendingRestaurants());
    }
    @GetMapping("/restaurant/{id}")

    public ResponseEntity<Optional<Restaurant>> getAttraction(@PathVariable Integer id) {
        return ResponseEntity.ok(restaurantService.restaurant(id));
    }
    @PostMapping("/restaurant")
    public void addAttraction(@RequestBody Restaurant newRestaurant) {
        restaurantService.save(newRestaurant);
    }
    @DeleteMapping("/restaurant/{id}")
    public void deleteAttraction(@PathVariable Integer id) {
        restaurantService.delete(id);
    }
//    @PutMapping("/restaurant/{id}")
//    public Attraction updateAttraction(@RequestBody Restaurant newRestaurant, @PathVariable Integer id) {
//        return restaurantService.update(newRestaurant, id);
//
//    }


}
