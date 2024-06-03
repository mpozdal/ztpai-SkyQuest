package com.pozdal.SkyQuest.repository;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AttractionRepository extends JpaRepository<Attraction, Integer> {

    public List<Attraction> findByCity(String city);
    public List<Attraction> findByCategory(String category);
    public List<Attraction> findByCityAndCategory(String city, String category);
}
