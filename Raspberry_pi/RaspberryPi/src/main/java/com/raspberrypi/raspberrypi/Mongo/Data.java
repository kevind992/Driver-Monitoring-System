package com.raspberrypi.raspberrypi.Mongo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "datas")
public class Data {

    @Id
    private String id;
    private String repAvgSpeed;
    private String repHighestRPM;

    public Data(){
        super();
    }

    public Data(String repAvgSpeed, String repHighestRPM) {
        this.repAvgSpeed = repAvgSpeed;
        this.repHighestRPM = repHighestRPM;
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
}
