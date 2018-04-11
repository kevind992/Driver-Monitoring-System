package com.raspberrypi.raspberrypi.Mongo;

import com.mongodb.MongoSocketOpenException;
import com.mongodb.MongoTimeoutException;
import com.raspberrypi.raspberrypi.OBD.OBD;
import com.raspberrypi.raspberrypi.Report.ReportGenerator;
import org.springframework.boot.CommandLineRunner;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.stereotype.Component;

import java.io.FileNotFoundException;
import java.net.SocketException;
import java.net.SocketTimeoutException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.TimeoutException;

@Component
public class DbSeeder implements CommandLineRunner {

    private DataRepository dataRepository;
    private List<Data> data = new ArrayList<Data>();
    private boolean fileEmpty;

    public  DbSeeder(DataRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        System.out.println("In Mongo Package");

        Data newData;

        MongoOffline mongoOffline = new MongoOffline();

        try{
            fileEmpty = mongoOffline.IsFileEmpty();

            if(fileEmpty == false){

                data = mongoOffline.ReadFileData();
                try{
                    this.dataRepository.save(data);
                    data.clear();
                    System.out.println("dending report to mongodb..");
                }catch (IllegalStateException e){
                    System.out.println("Error - DB offline..");
                }catch (MongoSocketOpenException e){
                    System.out.println("Error - DB offline..");
                }
                catch (DataAccessResourceFailureException e){
                    System.out.println("Error - DB offline..");
                }
                catch (MongoTimeoutException e){
                    System.out.println("Error - DB offline..");
                }

            }else {
                System.out.println("File is empty");
            }
        }catch (MongoSocketOpenException e){
            System.out.println("Error - DB offline - OUTER..");
        }catch (IllegalStateException e){
            System.out.println("Error - DB offline - OUTER..");
        }catch (FileNotFoundException e){
            System.out.println("File not Found..");
        }

        //Generating report for current trip
        ReportGenerator report = new ReportGenerator();
        newData = report.generateReport();

        System.out.println("Back In Mongo Package");

        //adding the report to an List of reports
        data.add(newData);

        if(newData.getRepHighestRPM().equals("0"))
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
            }catch (MongoSocketOpenException e) {
                System.out.println("DB offline, writing to local file..");
                mongoOffline.WriteFileData(data);
            }catch (DataAccessResourceFailureException e) {
                System.out.println("DB offline, writing to local file..");
                mongoOffline.WriteFileData(data);
            }
            catch (MongoTimeoutException e){
                System.out.println("Error - DB offline..");
            }
        }
    }
}