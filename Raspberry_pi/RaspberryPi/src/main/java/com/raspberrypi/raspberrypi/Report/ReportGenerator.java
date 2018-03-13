package com.raspberrypi.raspberrypi.Report;

import com.raspberrypi.raspberrypi.OBD.OBD;

import java.util.ArrayList;
import java.util.Collections;
import java.util.stream.IntStream;

public class ReportGenerator {

    //A Class for generating OBD reports

    private DataTypes data;

    //A method for generating a final report
    public void generateReport(){

        System.out.println("In Report Generator..");
        OBD obd = new OBD();

        try{
            data = obd.getData();
        }
        catch(Exception e){
            System.out.println("Report Generator Error: " + e);
        }

        System.out.println("Leaving Report Generator..");
    }
    //A method for calculating the total average speed of a trip
    private int calAvgSpeed(){

        int sum = 0;
        for(int i : data.getSpeed()) {
            sum += i;
        }

        return sum / data.getSpeed().size();

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
}
