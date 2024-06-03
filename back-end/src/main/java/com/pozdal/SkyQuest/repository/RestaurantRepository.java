package com.pozdal.SkyQuest.repository;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Restaurant;
import com.pozdal.SkyQuest.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    List<Restaurant> findByStatus(Status status);
    List<Restaurant> findByStatusAndUser_id(Status status, Integer id);
    List <Restaurant> findByCityAndCusineAndPrice(String city, String cusine, String price);
    List <Restaurant> findByCity(String city);
    List <Restaurant> findByCusine(String cusine);
    List <Restaurant> findByPrice(String price);
    List <Restaurant> findByCusineAndCity(String cusine, String city);
    List <Restaurant> findByPriceAndCusine(String price, String cusine);
    List <Restaurant> findByPriceAndCity(String price, String city);
}
