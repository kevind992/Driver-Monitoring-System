package com.raspberrypi.raspberrypi.Report;

import com.raspberrypi.raspberrypi.Mongo.Data;
import com.raspberrypi.raspberrypi.OBD.OBD;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;

public class ReportGenerator {

    //A Class for generating OBD reports

    private DataTypes data;
    private int avgSpeed;
    private int highestRPM;
    private int dist;
    private ArrayList<Integer> speeds;
    private ArrayList<Integer> rpms;

    //A method for generating a final report
    public Data generateReport(){

        System.out.println("In Report Generator..");

        //Creating instances of OBD and Data
        OBD obd = new OBD();
        Data calData = new Data();

        try{
            data = obd.getData();
            //Calculation methods(Avg Speed, HighestRPM, Total Distance)
            avgSpeed = calAvgSpeed();
            highestRPM = calHighestRPM();
            dist = calDistance(data.getDistStart(),data.getDistEnd());

            //Adding the three values to Data Object
            calData.setDate(getDate());
            calData.setRepAvgSpeed(String.valueOf(avgSpeed));
            calData.setRepHighestRPM(String.valueOf(highestRPM));
            calData.setRepDistance(String.valueOf(dist));
            calData.setSpeedData(data.getSpeed());
            calData.setSpeedData(data.getRpm());
        }
        catch(Exception e){
            System.out.println("Report Generator Error: -" + e);
        }

        System.out.println("Leaving Report Generator..");

        return calData;
    }

    //A method for calculating the total average speed of a trip
    private int calAvgSpeed(){

        int res;

        int sum = 0;
        for(int i : data.getSpeed()) {
            sum += i;
        }

        res = sum / data.getSpeed().size();

        return res;
    }

    //A method for calculating the average miles per gallon
    private void calMPG(){



    }

    //A method for calculating the highest RPM
    private int calHighestRPM(){

        int max;

        max = Collections.max(data.getRpm());

        return max;
    }

    //A method for calculating the total distance traveled
    private int calDistance(int start, int finish){

        int res;

        res = finish - start;

        return res;
    }
    // Method for getting current date
    private String getDate(){
        // Format for the date
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        // Getting current date
        Date date = new Date();
        // Returning today's date
        return dateFormat.format(date);
    }
}
