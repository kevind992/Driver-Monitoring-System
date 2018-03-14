package com.raspberrypi.raspberrypi.Mongo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "datas")
public class Data {

    @Id
    private String id;
    private String repAvgSpeed;
    private String repHighestRPM;
    private String repDistance;

    public Data(){
        super();
    }

    public Data(String repAvgSpeed, String repHighestRPM, String repDistance) {
        this.repAvgSpeed = repAvgSpeed;
        this.repHighestRPM = repHighestRPM;
        this.repDistance = repDistance;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRepAvgSpeed() {
        return repAvgSpeed;
    }

    public void setRepAvgSpeed(String repAvgSpeed) {
        this.repAvgSpeed = repAvgSpeed;
    }

    public String getRepHighestRPM() {
        return repHighestRPM;
    }

    public void setRepHighestRPM(String repHighestRPM) {
        this.repHighestRPM = repHighestRPM;
    }

    public String getRepDistance() {
        return repDistance;
    }

    public void setRepDistance(String repDistance) {
        this.repDistance = repDistance;
    }
}
