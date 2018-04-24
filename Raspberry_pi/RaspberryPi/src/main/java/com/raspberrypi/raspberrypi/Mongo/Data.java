package com.raspberrypi.raspberrypi.Mongo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;

// Name of collection which data will be stored within Mongodb
@Document(collection = "datas")
public class Data implements Serializable {


    @Id // Setting the string id as the document id
    private String id;
    private String date;
    private String repAvgSpeed;
    private String repHighestRPM;
    private String repDistance;
    private ArrayList<Integer> speedList;
    private ArrayList<Integer> rpmList;


    //No Argument Constructor
    public Data(){
        super();
    }

    //Argument Constructor
    public Data(String dateString, String repAvgSpeed, String repHighestRPM, String repDistance, ArrayList<Integer> speedList, ArrayList<Integer> rpmList) {

        this.date = dateString;
        this.repAvgSpeed = repAvgSpeed;
        this.repHighestRPM = repHighestRPM;
        this.repDistance = repDistance;
        this.speedList = speedList;
        this.rpmList = rpmList;
    }

    // Getters and Setters
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

    public ArrayList<Integer> getSpeedList() {
        return speedList;
    }

    public void setSpeedList(ArrayList<Integer> speedList) {
        this.speedList = speedList;
    }

    public ArrayList<Integer> getRpmList() {
        return rpmList;
    }

    public void setRpmList(ArrayList<Integer> rpmList) {
        this.rpmList = rpmList;
    }
}
