package com.raspberrypi.raspberrypi.Mongo;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MongoOffline implements Serializable {

    private File backupFile;

    public MongoOffline(){

        super();
        backupFile = new File("backup.txt");
    }

    public void WriteFileData(List<Data> data)  throws FileNotFoundException, IOException{

        //Creating the FileOutputStream, BufferedOutputStream and ObjectOutputStream
        FileOutputStream fo = new FileOutputStream(backupFile);
        BufferedOutputStream bout = new BufferedOutputStream(fo);
        ObjectOutputStream output = new ObjectOutputStream(bout);

        for(Data d : data){
            output.writeObject(d);
        }

        System.out.println("Data written to file..");

    }
    public List<Data> ReadFileData()throws FileNotFoundException, IOException, ClassNotFoundException{

        List<Data> list = Arrays.asList();

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
    //Checks whether file is empty or not
    public boolean IsFileEmpty() throws IOException, ClassNotFoundException {

        boolean fileEmpty;
        List<Data> list;

        list = ReadFileData();

        if(list.isEmpty()){
            fileEmpty = true;
        }else {
            fileEmpty = false;
        }

        return fileEmpty;
    }
}
