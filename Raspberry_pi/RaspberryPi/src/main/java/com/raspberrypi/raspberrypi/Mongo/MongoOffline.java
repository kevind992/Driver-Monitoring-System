package com.raspberrypi.raspberrypi.Mongo;

import com.raspberrypi.raspberrypi.OBD.OBD;
import com.raspberrypi.raspberrypi.Report.ReportGenerator;

import java.io.*;
import java.util.Arrays;
import java.util.List;

public class MongoOffline implements Serializable {



    public MongoOffline(){

        super();

    }

    public void WriteFileData(List<Data> data)  throws FileNotFoundException, IOException{

        File backupFile = new File("/backup.txt");

        //Creating the FileOutputStream, BufferedOutputStream and ObjectOutputStream
        FileOutputStream fo = new FileOutputStream(backupFile);
        BufferedOutputStream bout = new BufferedOutputStream(fo);
        ObjectOutputStream output = new ObjectOutputStream(bout);

        for(Data d : data){
            output.writeObject(d);
        }

        /*//checking if users file exists
        boolean check = new File("com/raspberrypi/raspberrypi/backup.txt").exists();
        if(check == false){
            //creating file
            BufferedWriter bw = new BufferedWriter(new FileWriter("backup.txt", true));

            PrintWriter outfile = new PrintWriter(bw);

            //writing to file
            for(Data d : data){
                outfile.write(d.toString());
            }

            bw.close();
            outfile.close();
        }
*/

        //bw.close();
        output.close();

        System.out.println("Data written to file..");

    }

    public List<Data> ReadFileData()throws FileNotFoundException, IOException, ClassNotFoundException {

        File backupFile = new File("/backup.txt");

        List<Data> list = null;

        FileInputStream in = new FileInputStream(backupFile);
        BufferedInputStream bInpStream = new BufferedInputStream(in);
        ObjectInputStream ojInputStream = new ObjectInputStream(bInpStream);

        try {
            while(ojInputStream.readObject() != null) {
                //Reading and adding to the Arraylist
                Data d = (Data) ojInputStream.readObject();
                list.add(d);
            }
        } catch (EOFException ex) {
            System.out.println("Error - Data not read from file..");
        }

        System.out.println("backupFile.txt Read Successful..");

        //Closing the last opened stream
        ojInputStream.close();

        //Sending the arraylist
        return list;
    }

    //Checks whether file is empty or not
    public boolean IsFileEmpty() throws IOException, ClassNotFoundException {

        boolean fileEmpty;

        List<Data> list;

        //reading from backup.txt to see if there is any saved files
        list = ReadFileData();

        if(list.isEmpty()){
            fileEmpty = true;
        }else {
            fileEmpty = false;
        }

        return fileEmpty;
    }
    public boolean IsConnected(){

        return true;
    }
}
