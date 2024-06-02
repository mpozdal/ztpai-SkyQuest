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
@Table(name = "_attraction_info")
public class AttractionInfo {
    @Id
    @GeneratedValue
    private Integer id;
    private String description;
    private String openingHour;
    private String price;
    private String address;

}
