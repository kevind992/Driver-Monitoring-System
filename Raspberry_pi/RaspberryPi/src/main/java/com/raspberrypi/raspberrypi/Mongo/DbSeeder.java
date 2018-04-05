package com.raspberrypi.raspberrypi.Mongo;

import com.raspberrypi.raspberrypi.OBD.OBD;
import com.raspberrypi.raspberrypi.Report.ReportGenerator;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

@Component
public class DbSeeder implements CommandLineRunner {

    private DataRepository dataRepository;
    private List<Data> backupData = Arrays.asList();
    private boolean fileEmpty;

    public  DbSeeder(DataRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        System.out.println("In Mongo Package");

        Data data1;

        MongoOffline mongoOffline = new MongoOffline();

        if (mongoOffline.IsConnected() == false){

            fileEmpty = mongoOffline.IsFileEmpty();

            if(fileEmpty == false){

                backupData = mongoOffline.ReadFileData();
                try{
                    this.dataRepository.save(backupData);
                }catch (IllegalStateException e){
                    System.out.println("Error - DB offline..");
                }
            }

        }

        //Generating report for current trip
        ReportGenerator report = new ReportGenerator();
        data1 = report.generateReport();

        System.out.println("Back In Mongo Package");

        //adding the report to an List of reports
        List<Data> data = Arrays.asList(data1);



        if(data1.getRepHighestRPM().equals("0"))
        {
            System.out.println("Error Handling - No Data..");
        }else{
            //sending report to mongodb
            try{
                System.out.println("Sending to mongoDB..");
                this.dataRepository.save(data);
            }catch (IllegalStateException e){

                System.out.println("DB offline, writing to local file..");
                mongoOffline.WriteFileData(data);
            }
        }
    }
}