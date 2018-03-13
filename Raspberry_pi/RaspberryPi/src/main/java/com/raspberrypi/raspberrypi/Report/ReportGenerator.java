package com.raspberrypi.raspberrypi.Report;

import com.raspberrypi.raspberrypi.OBD.OBD;

import java.util.ArrayList;

public class ReportGenerator {

    //A Class for generating OBD reports

    private ArrayList<DataTypes> data = new ArrayList<DataTypes>();

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
}
