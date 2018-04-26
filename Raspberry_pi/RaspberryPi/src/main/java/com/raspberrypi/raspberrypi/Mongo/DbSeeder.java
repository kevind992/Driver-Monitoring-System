package com.raspberrypi.raspberrypi.Mongo;

import com.mongodb.MongoSocketOpenException;
import com.mongodb.MongoTimeoutException;
import com.raspberrypi.raspberrypi.Report.ReportGenerator;
import org.springframework.boot.CommandLineRunner;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.stereotype.Component;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

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

        // Instance of object
        Data newData;

        // Instance of MongoOffline. Used for handling all the offline methods
        MongoOffline mongoOffline = new MongoOffline();

        try{
            // Check if there is data of on the backup.txt
            fileEmpty = mongoOffline.IsFileEmpty();

            // If there is backed up data go through if statement
            if(fileEmpty == false){

                // Pull the backed up data from the backup.txt
                data = mongoOffline.ReadFileData(true);

                try{
                    // Attempting to send backed up reports to the mongodb
                    this.dataRepository.save(data);
                    System.out.println("sending report to mongodb..");
                    data.clear();
                    System.out.println("List Cleared..");
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
                System.out.println("No Backup.txt file detected..");
            }
        }catch (MongoSocketOpenException e){ // Error catching
            System.out.println("Error - DB offline - OUTER..");
        }catch (IllegalStateException e){
            System.out.println("Error - DB offline - OUTER..");
        }catch (FileNotFoundException e){
            System.out.println("File not Found..");
        }

        //Generating new report for current trip
        ReportGenerator report = new ReportGenerator();
        newData = report.generateReport();
        System.out.println("Back In Mongo Package");

        // Adding the report to an List of reports
        data.add(newData);

        // Check for whether report was genuine
        if(newData.getRepHighestRPM().equals("0"))
        {
            System.out.println("Error Handling - No Data..");
        }else{ // If genuine
            //sending report to mongodb
            try{
                // Send to mongodb
                System.out.println("Sending to mongoDB..");
                this.dataRepository.save(data);

            }catch (IllegalStateException e){ // Error catching
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