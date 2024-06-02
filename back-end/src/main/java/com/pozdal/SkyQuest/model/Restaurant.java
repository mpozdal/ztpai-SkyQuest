package com.pozdal.SkyQuest.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "_restaurant")
public class Restaurant {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String city;
    private String imgUrl;
    private String cusine;
    private String description;
    private String price;
    private String url;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @Enumerated(EnumType.STRING)
    private Status status;
}
