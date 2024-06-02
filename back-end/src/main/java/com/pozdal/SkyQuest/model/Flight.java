package com.pozdal.SkyQuest.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "_flight")
public class Flight {
    @Id
    @GeneratedValue
    private Integer id;
    private String depart;
    private String arrive;
    private Date departureDate;
    private Date returnDate;
    private String imgUrl;
    private Integer stops;
    private String url;
    private String description;
    private String price;
    private String airlines;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    public Flight(String depart, String arrive, Date departureDate, Date returnDate, String imgUrl, Integer stops, String url, String description, User user) {
        this.depart = depart;
        this.arrive = arrive;
        this.departureDate = departureDate;
        this.returnDate = returnDate;
        this.imgUrl = imgUrl;
        this.stops = stops;
        this.url = url;
        this.description = description;
        this.user = user;
    }
}
