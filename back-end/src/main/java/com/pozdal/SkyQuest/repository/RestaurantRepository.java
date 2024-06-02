package com.pozdal.SkyQuest.repository;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Restaurant;
import com.pozdal.SkyQuest.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    List<Restaurant> findByStatus(Status status);
    List<Restaurant> findByStatusAndUser_id(Status status, Integer id);
}
