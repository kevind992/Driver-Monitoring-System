package com.raspberrypi.raspberrypi.OBD;

import com.fazecast.jSerialComm.SerialPort;
import com.raspberrypi.raspberrypi.OBD.commands.control.*;
import com.raspberrypi.raspberrypi.OBD.commands.engine.RPMCommand;
import com.raspberrypi.raspberrypi.OBD.commands.fuel.FuelLevelCommand;
import com.raspberrypi.raspberrypi.OBD.commands.protocol.*;
import com.raspberrypi.raspberrypi.OBD.enums.ObdProtocols;

import java.io.IOException;

public class OBD {

    public void getData() throws IOException {


        System.out.println("In OBD package");
        //A Class for getting OBD Data

        SerialPort serials[] = SerialPort.getCommPorts();
        for (SerialPort serial : serials) {
            System.out.println("serial ports are: " + serial.getSystemPortName().toString());
        }

        SerialPort socket = SerialPort.getCommPorts()[2];
        System.out.println(socket.getDescriptivePortName());

        socket.openPort();
        socket.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 100, 100);
        System.out.println("opened ports on socket");


        try {
            new EchoOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            new LineFeedOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            new TimeoutCommand(10000).run(socket.getInputStream(), socket.getOutputStream());
            new SelectProtocolCommand(ObdProtocols.AUTO).run(socket.getInputStream(), socket.getOutputStream());
            new HeadersOffCommand().run(socket.getInputStream(),socket.getOutputStream());
            System.out.println("setup done");
            while (socket.isOpen()==true) {

                //Commands and results every 15 seconds

                //RPM
                //RETURNS 788RPM (WORKS)
                RPMCommand rpmCmd = new RPMCommand();
                rpmCmd.run(socket.getInputStream(), socket.getOutputStream());
                int rpmInt = rpmCmd.getRPM();
                System.out.println("rpm result is : " + rpmInt);


                //DistanceMILONCommand
                //RETURNS 0KM/H
//                DistanceMILOnCommand distCmd = new DistanceMILOnCommand();
//                distCmd.run(socket.getInputStream(), socket.getOutputStream());
//                int rpmInt = (int)distCmd.getFormattedResult();


                //FuelLevelCommand
                //RETURNS NODATA
//                FuelLevelCommand fuelLevCmd = new FuelLevelCommand();
//                fuelLevCmd.run(socket.getInputStream(), socket.getOutputStream());
//                System.out.println("fuel level cmd result is : " + fuelLevCmd.getFormattedResult().toString());

                //SpeedCommand
                //RETURNS XX KM/H (WORKS)
//                SpeedCommand spdCmd = new SpeedCommand();
//                spdCmd.run(socket.getInputStream(), socket.getOutputStream());
//                System.out.println("speed cmd result is : " + spdCmd.getFormattedResult().toString());

                //IgnitionMonitorCommand
                //RETURNS ON/OFF (WORKS)
//                IgnitionMonitorCommand igMonCmd = new IgnitionMonitorCommand();
//                igMonCmd.run(socket.getInputStream(), socket.getOutputStream());
//                System.out.println("ignition monitor cmd result is : " + igMonCmd.getFormattedResult().toString());

                //DistanceSinceCCCommand
                //RETURNS 26248KM (WORKS)
//                DistanceSinceCCCommand distSinceCC = new DistanceSinceCCCommand();
//                distSinceCC.run(socket.getInputStream(), socket.getOutputStream());
//                System.out.println("distance since cc cmd result is : " + distSinceCC.getFormattedResult().toString());

                //DtcNumberCommand
                //RETURNS MIL is OFF0 codes
//                DtcNumberCommand dtcCmd = new DtcNumberCommand();
//                dtcCmd.run(socket.getInputStream(), socket.getOutputStream());
//                System.out.println("dtc number cmd result is : " + dtcCmd.getFormattedResult().toString());

                //PermanentTroubleCodesCommand
                //RETURNS UNABLE TO CONNECT
//                PermanentTroubleCodesCommand pmttcCmd = new PermanentTroubleCodesCommand();
//                pmttcCmd.run(socket.getInputStream(), socket.getOutputStream());
//                System.out.println("permanent trouble codes cmd result is: " + pmttcCmd.getFormattedResult().toString());

                Thread.sleep(1 * 1000);

                new CloseCommand().run(socket.getInputStream(),
                        socket.getOutputStream());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        socket.closePort();
    }

}
