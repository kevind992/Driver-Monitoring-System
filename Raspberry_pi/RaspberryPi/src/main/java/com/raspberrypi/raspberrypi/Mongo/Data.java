package com.raspberrypi.raspberrypi.Mongo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;


@Document(collection = "datas")
public class Data implements Serializable {

    @Id
    private String id;
    private String date;
    private String repAvgSpeed;
    private String repHighestRPM;
    private String repDistance;
    private ArrayList<Integer> speedData;
    private ArrayList<Integer> rpmData;


    public Data(){
        super();
    }

    public Data(String dateString, String repAvgSpeed, String repHighestRPM, String repDistance, ArrayList<Integer> speedData, ArrayList<Integer> rpmData) {

        this.date = dateString;
        this.repAvgSpeed = repAvgSpeed;
        this.repHighestRPM = repHighestRPM;
        this.repDistance = repDistance;
        this.speedData = speedData;
        this.rpmData = rpmData;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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

    public ArrayList<Integer> getRpmData() { return rpmData; }

    public void setRpmData(ArrayList<Integer> rpmData) { this.rpmData = rpmData; }

    public ArrayList<Integer> getSpeedData() { return speedData; }

    public void setSpeedData(ArrayList<Integer> speedData) { this.speedData = speedData; }
}
