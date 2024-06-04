package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.*;
import com.pozdal.SkyQuest.repository.AttractionRepository;
import com.pozdal.SkyQuest.repository.RestaurantRepository;
import com.pozdal.SkyQuest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public List<Restaurant> getFilterRestaurant(String city, String cusine, String price) {
        if (city != null && cusine != null && price != null) {
            return restaurantRepository.findByCityAndCusineAndPriceAndStatus(city, cusine, price, Status.ACCEPTED);
        } else if (city != null) {
            return restaurantRepository.findByCityAndStatus(city, Status.ACCEPTED);
        } else if (cusine != null) {
            return restaurantRepository.findByCusineAndStatus(cusine, Status.ACCEPTED);
        } else if(price != null) {
            return restaurantRepository.findByPriceAndStatus(price, Status.ACCEPTED);
        } else if(cusine != null && city != null) {
            return restaurantRepository.findByCusineAndCityAndStatus(cusine, city, Status.ACCEPTED);
        } else if(price != null && city != null) {
            return restaurantRepository.findByPriceAndCityAndStatus(price, city, Status.ACCEPTED);
        } else if(price != null && cusine != null) {
            return restaurantRepository.findByPriceAndCusineAndStatus(price, cusine, Status.ACCEPTED);
        } else {
            return restaurantRepository.findByStatus(Status.ACCEPTED);
        }
    }
    public void update(Restaurant newRestaurant) {
        restaurantRepository.save(newRestaurant);
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

//    @Transactional
//    public Restaurant createRestaurant(String name, String city, String imgUrl,
//                                       String url, String cusine, String description,
//                                       String price, Status status, User userId) {
//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        Restaurant restaurant = new Restaurant();
//        restaurant.setName(name);
//        restaurant.setUser(user);
//        restaurant.setCity(city);
//        restaurant.setImgUrl(imgUrl);
//        restaurant.setUrl(url);
//        restaurant.setCusine(cusine);
//        restaurant.setDescription(description);
//        restaurant.setPrice(price);
//        restaurant.setStatus(status);
//
//
//        return restaurantRepository.save(restaurant);
//    }




}
