package com.raspberrypi.raspberrypi.Mongo;

import com.raspberrypi.raspberrypi.OBD.OBD;
import com.raspberrypi.raspberrypi.Report.ReportGenerator;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

@Component
public class DbSeeder implements CommandLineRunner {

    private DataRepository dataRepository;

    public  DbSeeder(DataRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        System.out.println("In Mongo Package");

        Data data1;

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
            this.dataRepository.save(data);
        }



    }
}
