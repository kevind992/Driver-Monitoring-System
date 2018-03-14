package com.raspberrypi.raspberrypi.Report;

import com.raspberrypi.raspberrypi.Mongo.Data;
import com.raspberrypi.raspberrypi.OBD.OBD;
import java.util.Collections;

public class ReportGenerator {

    //A Class for generating OBD reports

    private DataTypes data;
    private int avgSpeed;
    private int highestRPM;
    private int dist;

    //A method for generating a final report
    public Data generateReport(){

        System.out.println("In Report Generator..");
        OBD obd = new OBD();
        Data calData = new Data();

        try{
            data = obd.getData();

            avgSpeed = calAvgSpeed();
            System.out.println("Average Speed: " + avgSpeed);
            highestRPM = calHighestRPM();
            System.out.println("Highest RPM: " + highestRPM);

            calData.setRepAvgSpeed(String.valueOf(avgSpeed));
            calData.setRepHighestRPM(String.valueOf(highestRPM));
        }
        catch(Exception e){
            System.out.println("Report Generator Error:-" + e);
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
}
