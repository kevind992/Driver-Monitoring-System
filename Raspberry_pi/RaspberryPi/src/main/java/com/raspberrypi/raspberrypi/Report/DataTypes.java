package com.raspberrypi.raspberrypi.Report;

import java.util.ArrayList;

public class DataTypes {

    // Variables
    private int distStart;
    private int distEnd;
    private ArrayList<Integer> rpm;
    private ArrayList<Integer> speed;

    // No Argument Constructor
    public DataTypes(){
        super();
    }

    // Argument Constructor
    public DataTypes(ArrayList<Integer> rpm, ArrayList<Integer> speed) {
        this.rpm = rpm;
        this.speed = speed;
    }

    // Getters and Setters
    public ArrayList<Integer> getRpm() { return rpm; }

    public void setRpm(ArrayList<Integer> rpm) {
        this.rpm = rpm;
    }

    public ArrayList<Integer> getSpeed() {
        return speed;
    }

    public void setSpeed(ArrayList<Integer> speed) {
        this.speed = speed;
    }

    public int getDistStart() {
        return distStart;
    }

    public void setDistStart(int distStart) {
        this.distStart = distStart;
    }

    public int getDistEnd() {
        return distEnd;
    }

    public void setDistEnd(int distEnd) {
        this.distEnd = distEnd;
    }
}
