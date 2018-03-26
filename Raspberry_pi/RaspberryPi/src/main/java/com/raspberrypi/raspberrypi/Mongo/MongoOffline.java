package com.raspberrypi.raspberrypi.Mongo;

import java.io.*;
import java.util.ArrayList;

public class MongoOffline implements Serializable {

    private File backupFile;


    public MongoOffline(){

        super();
        backupFile = new File("backup.txt");
    }

    public void WriteFileData(ArrayList<Data> data)  throws FileNotFoundException, IOException{

        //Creating the FileOutputStream, BufferedOutputStream and ObjectOutputStream
        FileOutputStream fo = new FileOutputStream(backupFile);
        BufferedOutputStream bout = new BufferedOutputStream(fo);
        ObjectOutputStream output = new ObjectOutputStream(bout);

        for(Data d : data){
            output.writeObject(d);
        }

        System.out.println("Data written to file..");

    }
    public ArrayList<Data> ReadFileData()throws FileNotFoundException, IOException, ClassNotFoundException{

        ArrayList<Data> list = new ArrayList<>();

        //Creating a FileInputStream, BufferedInputStream and ObjectInputStream.
        FileInputStream fi = new FileInputStream(backupFile);
        BufferedInputStream binpt = new BufferedInputStream(fi);
        ObjectInputStream input = new ObjectInputStream(binpt);

        try {
            while (true) {
                //Reading and adding to the Arraylist
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
}
