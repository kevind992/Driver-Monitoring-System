package com.raspberrypi.raspberrypi.Mongo;

import com.raspberrypi.raspberrypi.OBD.OBD;
import com.raspberrypi.raspberrypi.Report.ReportGenerator;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MongoOffline implements Serializable {

    public void WriteFileData(List<Data> data)  throws FileNotFoundException, IOException{

        //File backupFile = new File("C:\\Users\\kevin\\Desktop\\Software 3rd Year\\Semester 2\\Professional Practice in I.T\\3rd-Year-Project\\Raspberry_pi\\backup.txt");
        File backupFile = new File("backup.txt");

        //Creating the FileOutputStream, BufferedOutputStream and ObjectOutputStream
        FileOutputStream fo = new FileOutputStream(backupFile);
        ObjectOutputStream output = new ObjectOutputStream(fo);

        for(Data d : data){
            output.writeObject(d);
        }

        output.close();

        System.out.println("Data written to file..");

    }

    public List<Data> ReadFileData()throws FileNotFoundException, IOException, ClassNotFoundException {

        //File backupFile = new File("C:\\Users\\kevin\\Desktop\\Software 3rd Year\\Semester 2\\Professional Practice in I.T\\3rd-Year-Project\\Raspberry_pi\\backup.txt");
        File backupFile = new File("backup.txt");

        List<Data> list = new ArrayList<Data>();

        FileInputStream in = new FileInputStream(backupFile);
        ObjectInputStream input = new ObjectInputStream(in);

        try {
                Data d = (Data) input.readObject();
                list.add(d);

        } catch (EOFException ex) {
            System.out.println("Error - Data not read from file..");
        }
        System.out.println("backupFile.txt Read Successful..");

        //Closing the last opened stream and deleting the backupFile.txt
        backupFile.delete();
        input.close();

        //Sending the arraylist
        return list;
    }

    //Checks whether file is empty or not
    public boolean IsFileEmpty() throws IOException, ClassNotFoundException {

        boolean fileEmpty;

        List<Data> list = ReadFileData();

//        try{
//            //reading from backup.txt to see if there is any saved files
//            list = ReadFileData();
//            fileEmpty = false;
//            System.out.println("false");
//        } catch (NullPointerException e){
//            fileEmpty = true;
//            System.out.println("true");
//        }
        if(list == null){
            fileEmpty = true;
            System.out.println("file empty");
        }else {
            fileEmpty = false;
            System.out.println("file not empty");
        }

        return fileEmpty;
    }

}
