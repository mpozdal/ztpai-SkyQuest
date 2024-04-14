package com.pozdal.SkyQuest.repository;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttractionRepository extends JpaRepository<Attraction, Integer> {
}
