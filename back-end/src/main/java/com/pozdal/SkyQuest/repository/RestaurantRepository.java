package com.pozdal.SkyQuest.repository;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Restaurant;
import com.pozdal.SkyQuest.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    List<Restaurant> findByStatus(Status status);
    List<Restaurant> findByStatusAndUser_id(Status status, Integer id);
    List <Restaurant> findByCityAndCusineAndPriceAndStatus(String city, String cusine, String price, Status status);
    List <Restaurant> findByCityAndStatus(String city, Status status);
    List <Restaurant> findByCusineAndStatus(String cusine, Status status);
    List <Restaurant> findByPriceAndStatus(String price, Status status);
    List <Restaurant> findByCusineAndCityAndStatus(String cusine, String city, Status status);
    List <Restaurant> findByPriceAndCusineAndStatus(String price, String cusine, Status status);
    List <Restaurant> findByPriceAndCityAndStatus(String price, String city, Status status);
}
