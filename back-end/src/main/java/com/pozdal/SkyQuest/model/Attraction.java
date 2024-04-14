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
@Table(name = "_attraction")
public class Attraction {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String city;
    private String imgUrl;
    private String category;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "attraction_id", referencedColumnName = "id")
    private AttractionInfo attractionInfo;
    @Enumerated(EnumType.STRING)
    private Status status;
}
