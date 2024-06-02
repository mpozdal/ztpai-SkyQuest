package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Restaurant;
import com.pozdal.SkyQuest.model.Status;
import com.pozdal.SkyQuest.model.User;
import com.pozdal.SkyQuest.repository.AttractionRepository;
import com.pozdal.SkyQuest.repository.RestaurantRepository;
import com.pozdal.SkyQuest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Restaurant> allAttraction() {
        return restaurantRepository.findAll();
    }
    public List<Restaurant> getConfirmedRestaurants() {
        return restaurantRepository.findByStatus(Status.ACCEPTED);
    }
    public List<Restaurant> getPendingRestaurants() {
        return restaurantRepository.findByStatus(Status.IN_REVIEW);
    }
    public List<Restaurant> getUserPendingRestaurants(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return restaurantRepository.findByStatusAndUser_id(Status.IN_REVIEW, user.getId());
        } else {
            throw new RuntimeException("User not found with email: " + email);
        }

    }
    public Optional<Restaurant> restaurant(Integer id) {
        return restaurantRepository.findById(id);
    }
    public void delete(Integer id) {
        restaurantRepository.deleteById(id);
    }
    public void save(Restaurant attraction) {restaurantRepository.save(attraction);}




}
