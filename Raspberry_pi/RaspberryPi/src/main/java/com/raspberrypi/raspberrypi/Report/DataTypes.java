package com.raspberrypi.raspberrypi.Report;

import java.util.ArrayList;

public class DataTypes {

    private ArrayList<Integer> rpm;
    private ArrayList<Integer> speed;
    private ArrayList<Integer> distance;


    public DataTypes(ArrayList<Integer> rpm, ArrayList<Integer> speed, ArrayList<Integer> distance, ArrayList<Double> heat) {
        this.rpm = rpm;
        this.speed = speed;
        this.distance = distance;

    }

    public ArrayList<Integer> getRpm() {
        return rpm;
    }

    public void setRpm(ArrayList<Integer> rpm) {
        this.rpm = rpm;
    }

    public ArrayList<Integer> getSpeed() {
        return speed;
    }

    public void setSpeed(ArrayList<Integer> speed) {
        this.speed = speed;
    }

    public ArrayList<Integer> getDistance() {
        return distance;
    }

    public void setDistance(ArrayList<Integer> distance) {
        this.distance = distance;
    }
}
