package com.raspberrypi.raspberrypi.Mongo;

import com.raspberrypi.raspberrypi.OBD.OBD;
import com.raspberrypi.raspberrypi.Report.ReportGenerator;

import java.io.*;
import java.util.Arrays;
import java.util.List;

public class MongoOffline implements Serializable {

    public void WriteFileData(List<Data> data)  throws FileNotFoundException, IOException{

        File backupFile = new File("backup.txt");

        //Creating the FileOutputStream, BufferedOutputStream and ObjectOutputStream
        FileOutputStream fo = new FileOutputStream(backupFile);
        BufferedOutputStream bout = new BufferedOutputStream(fo);
        ObjectOutputStream output = new ObjectOutputStream(bout);

        for(Data d : data){
            output.writeObject(d);
        }

        output.close();

        System.out.println("Data written to file..");

    }

    public List<Data> ReadFileData()throws FileNotFoundException, IOException, ClassNotFoundException {

        File backupFile = new File("backup.txt");

        List<Data> list = null;

        FileInputStream in = new FileInputStream(backupFile);
        ObjectInputStream input = new ObjectInputStream(in);

        try {
            System.out.println("before while read");

            while (true) {

                Data d = (Data) input.readObject();
                list.add(d);

            }
        } catch (EOFException ex) {
            System.out.println("Error - Data not read from file..");
        }
        System.out.println("backupFile.txt Read Successful..");

        //Closing the last opened stream
        input.close();

        //Sending the arraylist
        return list;
    }

    //Checks whether file is empty or not
    public boolean IsFileEmpty() throws IOException, ClassNotFoundException {
        System.out.println("Is file empty..");
        boolean fileEmpty;

        List<Data> list = Arrays.asList();;

        try{
            //reading from backup.txt to see if there is any saved files
            list = ReadFileData();
            fileEmpty = false;
            System.out.println("false");
        } catch (NullPointerException e){
            fileEmpty = true;
            System.out.println("true");
        }

//        System.out.println();
//        if(list == null){
//
//        }else {
//            fileEmpty = false;
//            System.out.println("false");
//        }

        return fileEmpty;
    }
    public boolean IsConnected(){

        return true;
    }
}
