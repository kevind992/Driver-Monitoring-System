package com.raspberrypi.raspberrypi.Report;

public class DataTypes {

    private int rpm;
    private int speed;
    private int distance;
    private double heat;


    public DataTypes(int rpm, int speed, int distance, double heat) {
        this.rpm = rpm;
        this.speed = speed;
        this.distance = distance;
        this.heat = heat;
    }

    public int getRpm() {
        return rpm;
    }

    public void setRpm(int rpm) {
        this.rpm = rpm;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public double getHeat() {
        return heat;
    }

    public void setHeat(double heat) {
        this.heat = heat;
    }
}
