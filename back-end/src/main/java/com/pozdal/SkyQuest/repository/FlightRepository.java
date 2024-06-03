package com.pozdal.SkyQuest.repository;

import com.pozdal.SkyQuest.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface FlightRepository extends JpaRepository<Flight, Integer> {
     List<Flight> findByDepartAndArrive(String depart, String arrive);
     List<Flight> findByDepart(String depart);
     List<Flight> findByArrive(String arrive);
}
