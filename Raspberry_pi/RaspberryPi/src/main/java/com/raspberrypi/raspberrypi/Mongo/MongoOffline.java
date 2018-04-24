package com.raspberrypi.raspberrypi.Mongo;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

// A Java class for managing all the offline functions like reading, writing and checking a text file
public class MongoOffline implements Serializable {

    // A method for writing a list of Data objects to a file
    public void WriteFileData(List<Data> data)  throws FileNotFoundException, IOException{

        // File which backup will be stored
        File backupFile = new File("backup.txt");

        //Creating the FileOutputStream and ObjectOutputStream
        FileOutputStream fo = new FileOutputStream(backupFile);
        ObjectOutputStream output = new ObjectOutputStream(fo);

        //Writing everything within the Data list to the backup.txt
        for(Data d : data){
            output.writeObject(d);
        }

        // Closing the ObjectOutputStream
        output.close();

        System.out.println("Data written to file..");

    }
    // A method for reading objects from a file
    public List<Data> ReadFileData(boolean check)throws FileNotFoundException, IOException, ClassNotFoundException {

        // Backup file
        File backupFile = new File("backup.txt");

        // List which the objects will be stored
        List<Data> list = new ArrayList<Data>();

        // Creating the FileInputStream and ObjectOutputStream
        FileInputStream in = new FileInputStream(backupFile);
        ObjectInputStream input = new ObjectInputStream(in);

        try {
                // Trying to read the data from the backup.txt file
                Data d = (Data) input.readObject();
                // Adding the object to the list
                list.add(d);

        } catch (EOFException ex) { }

        System.out.println("backupFile.txt Read Successful..");

        // if this isnt a check then after the read delete the file
        if(check == false){
            backupFile.delete();
        }

        //Closing the last opened stream
        input.close();

        //Returning the arraylist
        return list;
    }

    //Checks whether file is empty or not
    public boolean IsFileEmpty() throws IOException, ClassNotFoundException {

        // Creating fileEmpty and list
        boolean fileEmpty;
        List<Data> list = new ArrayList<Data>();

        try{
            //reading from backup.txt to see if there is any saved files
            System.out.println("Trying read check");
            list = ReadFileData(false);
        } catch (NullPointerException e){ }

        //If file is empty set fileEmpty to true
        if(list.isEmpty()){
            fileEmpty = true;
            System.out.println("file empty");
        }else { // Else set fileEmpty to false
            fileEmpty = false;
            System.out.println("file not empty");
        }

        //return fileEmpty
        return fileEmpty;
    }
}
