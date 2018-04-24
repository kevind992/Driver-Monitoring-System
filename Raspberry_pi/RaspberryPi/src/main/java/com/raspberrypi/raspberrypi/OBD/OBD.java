package com.raspberrypi.raspberrypi.OBD;

//Imports
import com.fazecast.jSerialComm.SerialPort;
import com.raspberrypi.raspberrypi.OBD.commands.SpeedCommand;
import com.raspberrypi.raspberrypi.OBD.commands.control.*;
import com.raspberrypi.raspberrypi.OBD.commands.engine.RPMCommand;
import com.raspberrypi.raspberrypi.OBD.commands.protocol.*;
import com.raspberrypi.raspberrypi.OBD.enums.ObdProtocols;
import com.raspberrypi.raspberrypi.Report.DataTypes;
import java.io.IOException;
import java.util.ArrayList;

public class OBD {

    private int rpm;
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
            new EchoOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            new LineFeedOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            new TimeoutCommand(10000).run(socket.getInputStream(), socket.getOutputStream());
            new SelectProtocolCommand(ObdProtocols.AUTO).run(socket.getInputStream(), socket.getOutputStream());
            new HeadersOffCommand().run(socket.getInputStream(),socket.getOutputStream());

            //Getting Starting distance
            DistanceSinceCCCommand distCmd = new DistanceSinceCCCommand();
            distCmd.run(socket.getInputStream(), socket.getOutputStream());
            startDist = distCmd.getKm();

            do{//do while rpm not less them 300rpm
                //RPM

                SpeedCommand speed = new SpeedCommand();
                speed.run(socket.getInputStream(),socket.getOutputStream());
                System.out.println("Speed: " + speed.getMetricSpeed());
                speedArray.add(count,speed.getMetricSpeed());

                RPMCommand rpmCmd = new RPMCommand();
                rpmCmd.run(socket.getInputStream(), socket.getOutputStream());
                rpm = rpmCmd.getRPM();
                rpmArray.add(count,rpmCmd.getRPM());
                System.out.println("rpm result is : " + rpm);

                Thread.sleep(1 * 1000);
                count++;

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
            new CloseCommand().run(socket.getInputStream(), socket.getOutputStream());


        } catch (Exception e) {
            e.printStackTrace();
        }

        //Closing socket
        socket.closePort();

        //Returning Object DataType
        return data;
    }
}