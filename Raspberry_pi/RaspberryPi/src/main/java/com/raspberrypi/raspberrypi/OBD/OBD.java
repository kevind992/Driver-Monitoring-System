package com.raspberrypi.raspberrypi.OBD;

//Imports
import com.fazecast.jSerialComm.SerialPort;
import com.raspberrypi.raspberrypi.OBD.commands.SpeedCommand;
import com.raspberrypi.raspberrypi.OBD.commands.control.*;
import com.raspberrypi.raspberrypi.OBD.commands.engine.RPMCommand;
import com.raspberrypi.raspberrypi.OBD.commands.protocol.*;
import com.raspberrypi.raspberrypi.OBD.enums.ObdProtocols;
import com.raspberrypi.raspberrypi.OBD.exceptions.NonNumericResponseException;
import com.raspberrypi.raspberrypi.Report.DataTypes;
import java.io.IOException;
import java.util.ArrayList;

public class OBD {

    private int rpm;
    private int speed;
    private int count=0;
    private int startDist;
    private int endDist;

    private ArrayList<Integer> rpmArray = new ArrayList<>();
    private ArrayList<Integer> speedArray = new ArrayList<>();

    //A Class for getting OBD Data
    public DataTypes getData() throws IOException {

        System.out.println("In OBD package");
        SerialPort serials[] = SerialPort.getCommPorts();
        SerialPort socket = SerialPort.getCommPorts()[1];

        //Opening com port
        socket.openPort();

        //Setting a com port timeout
        socket.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 100, 100);
        System.out.println("opened ports on socket");

        DataTypes data = new DataTypes();

        try {

            //Set up commands for OBD
            new ObdResetCommand().run(socket.getInputStream(),socket.getOutputStream());
            System.out.println("obdresetCmd ok");
            new EchoOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            System.out.println("echooffCmd ok");
            new LineFeedOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            System.out.println("linefeedoffCmd ok");
            new TimeoutCommand(10000).run(socket.getInputStream(), socket.getOutputStream());
            System.out.println("timeoutCmd ok");
            new SelectProtocolCommand(ObdProtocols.AUTO).run(socket.getInputStream(), socket.getOutputStream());
            System.out.println("selprotocolCmd ok");
            new HeadersOffCommand().run(socket.getInputStream(),socket.getOutputStream());
            System.out.println("headersoffCmd ok");

            //Getting Starting distance
            DistanceSinceCCCommand distCmd = new DistanceSinceCCCommand();
            distCmd.run(socket.getInputStream(), socket.getOutputStream());
            startDist = distCmd.getKm();
            System.out.println("distanceCmd ok");

            do{//do while rpm not less them 300rpm

                try{

                    SpeedCommand speedCom = new SpeedCommand();
                    speedCom.run(socket.getInputStream(),socket.getOutputStream());
                    //RPM
                    RPMCommand rpmCmd = new RPMCommand();
                    rpmCmd.run(socket.getInputStream(), socket.getOutputStream());

                    String tmp = speedCom.getCalculatedResult();
                    for(int i=0; i<tmp.length(); i++){
                        if(!Character.isDigit(tmp.charAt(i))){continue;}
                    }

                    speed = speedCom.getMetricSpeed();

                    System.out.println("Speed: " + speed);
                    speedArray.add(count,speed);

                    String tmp1 = rpmCmd.getCalculatedResult();
                    for(int i=0; i<tmp1.length(); i++){
                        if(!Character.isDigit(tmp1.charAt(i))){continue;}
                    }


                    rpm = Integer.parseInt(rpmCmd.getCalculatedResult());
                    rpmArray.add(count,rpm);
                    System.out.println("rpm result is : " + rpm);

                    //Thread.sleep(1 * 1000);
                    count++;

                }catch (NonNumericResponseException e){
                    System.out.println("Non Numeric Responce..");
                }

            }while (rpm > 300 );

            DistanceSinceCCCommand distCmd2 = new DistanceSinceCCCommand();
            distCmd2.run(socket.getInputStream(), socket.getOutputStream());
            endDist = distCmd2.getKm();

            //Adding arrays to DataTypes Object
            data.setRpm(rpmArray);
            data.setSpeed(speedArray);
            data.setDistStart(startDist);
            data.setDistEnd(endDist);

            //Running CloseCommand()
            new ObdResetCommand().run(socket.getInputStream(),socket.getOutputStream());
            new CloseCommand().run(socket.getInputStream(), socket.getOutputStream());


        } catch (NonNumericResponseException e) {
            System.out.println("Non Numeric Response Exception..");
        } catch (InterruptedException e){
            e.printStackTrace();
        }

        //Closing socket
        socket.closePort();

        //Returning Object DataType
        return data;
    }
}