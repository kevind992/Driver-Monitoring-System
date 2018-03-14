package com.raspberrypi.raspberrypi.OBD;

import com.fazecast.jSerialComm.SerialPort;
import com.raspberrypi.raspberrypi.OBD.commands.SpeedCommand;
import com.raspberrypi.raspberrypi.OBD.commands.control.*;
import com.raspberrypi.raspberrypi.OBD.commands.engine.RPMCommand;
import com.raspberrypi.raspberrypi.OBD.commands.fuel.FuelLevelCommand;
import com.raspberrypi.raspberrypi.OBD.commands.protocol.*;
import com.raspberrypi.raspberrypi.OBD.enums.ObdProtocols;
import com.raspberrypi.raspberrypi.Report.DataTypes;

import java.io.IOException;
import java.util.ArrayList;

public class OBD {

    private int rpm;
    private int count;

    private DataTypes data;
    private ArrayList<Integer> rpmArray = new ArrayList<>();
    private ArrayList<Integer> speedArray = new ArrayList<>();
    private ArrayList<Integer> distanceArray = new ArrayList<>();

    public DataTypes getData() throws IOException {

        System.out.println("In OBD package");
        //A Class for getting OBD Data


        //Setting up com ports
        SerialPort serials[] = SerialPort.getCommPorts();
        for (SerialPort serial : serials) {
            System.out.println("serial ports are: " + serial.getSystemPortName().toString());
        }
        SerialPort socket = SerialPort.getCommPorts()[1];
        System.out.println(socket.getDescriptivePortName());

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

            System.out.println("setup done");

            do{//do while rpm not less them 300rpm
                //RPM
                RPMCommand rpmCmd = new RPMCommand();
                rpmCmd.run(socket.getInputStream(), socket.getOutputStream());
                rpm = rpmCmd.getRPM();
                rpmArray.add(count,rpmCmd.getRPM());
                System.out.println("rpm result is : " + rpm);

                DistanceSinceCCCommand distCmd = new DistanceSinceCCCommand();
                distCmd.run(socket.getInputStream(), socket.getOutputStream());

                String dist = distCmd.getFormattedResult();
                System.out.println("Current Distance: " + dist);

                SpeedCommand speed = new SpeedCommand();
                speed.run(socket.getInputStream(),socket.getOutputStream());
                System.out.println("Speed: " + speed.getMetricSpeed());
                speedArray.add(count,speed.getMetricSpeed());

                Thread.sleep(1 * 1000);

                new CloseCommand().run(socket.getInputStream(),
                        socket.getOutputStream());
                count++;
            }while (rpm > 300);

            System.out.println("Has exited while loop");

            //Adding arrays to DataTypes Object
            data.setRpm(rpmArray);
            data.setSpeed(speedArray);

        } catch (Exception e) {
            e.printStackTrace();
        }

        socket.closePort();

        //Returning Object DataType
        return data;
    }

}
