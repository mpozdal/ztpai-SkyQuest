package com.pozdal.SkyQuest.controller;

        import com.pozdal.SkyQuest.model.Flight;
        import com.pozdal.SkyQuest.repository.FlightRepository;
        import com.pozdal.SkyQuest.service.FlightService;
        import jakarta.persistence.Entity;
        import lombok.AllArgsConstructor;
        import lombok.NoArgsConstructor;
        import org.apache.coyote.Response;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;
        import java.util.Optional;

@RestController

@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class FlightController {

    @Autowired
    private FlightService flightService;
    @GetMapping("/trending-flights")
    public ResponseEntity<List<Flight>> getTrendingFlights() {return ResponseEntity.ok(flightService.trendingFlights());}
    @GetMapping("/latest-flights")
    public ResponseEntity<List<Flight>> getLatestFlights() {return ResponseEntity.ok(flightService.latestFlights());}
    @GetMapping("/flight")
    public ResponseEntity<List<Flight>> getAllFlights() {
        return ResponseEntity.ok(flightService.allFlights());
    }
    @GetMapping("/flight/{id}")
    public ResponseEntity<Optional<Flight>> getFlight(@PathVariable Integer id) {
        return ResponseEntity.ok(flightService.flight(id));
    }
    @PostMapping("/flight")
    public ResponseEntity<Flight> addFlight(@RequestBody Flight newFlight) {
        return ResponseEntity.ok(flightService.save(newFlight));

    }
    @DeleteMapping("/flight/{id}")
    public void deleteFlight(@PathVariable Integer id) {
         flightService.delete(id);
    }
    @PutMapping("/flight/{id}")
    public Flight updateFlight(@RequestBody Flight newFlight, @PathVariable Integer id) {
        return flightService.update(newFlight, id);

    }


}
