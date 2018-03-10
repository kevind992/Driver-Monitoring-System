package com.raspberrypi.raspberrypi.OBD;

        import com.fazecast.jSerialComm.SerialPort;
        import com.raspberrypi.raspberrypi.OBD.commands.ObdCommand;
        import com.raspberrypi.raspberrypi.OBD.commands.SpeedCommand;
        import com.raspberrypi.raspberrypi.OBD.commands.control.*;
        import com.raspberrypi.raspberrypi.OBD.commands.engine.RPMCommand;
        import com.raspberrypi.raspberrypi.OBD.commands.fuel.FuelLevelCommand;
        import com.raspberrypi.raspberrypi.OBD.commands.protocol.*;
        import com.raspberrypi.raspberrypi.OBD.commands.temperature.AmbientAirTemperatureCommand;
        import com.raspberrypi.raspberrypi.OBD.commands.temperature.EngineCoolantTemperatureCommand;
        import com.raspberrypi.raspberrypi.OBD.enums.ObdProtocols;

        import java.io.BufferedReader;
        import java.io.IOException;
        import java.io.InputStreamReader;
        import java.time.Clock;

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
            System.out.println("setup done");
            while (socket.isOpen()==true) {

                //Commands and results every 15 seconds

                //RPM
                //RETURNS 788RPM (WORKS)
                RPMCommand rpmCmd = new RPMCommand();
                rpmCmd.run(socket.getInputStream(), socket.getOutputStream());
                System.out.println("rpm result is : " + rpmCmd.getFormattedResult().toString());


                //DistanceMILONCommand
                //RETURNS 0KM/H
                DistanceMILOnCommand distCmd = new DistanceMILOnCommand();
                distCmd.run(socket.getInputStream(), socket.getOutputStream());
                System.out.println("distance cmd result is : " + distCmd.getFormattedResult().toString());


                //FuelLevelCommand
                //RETURNS NODATA
                FuelLevelCommand fuelLevCmd = new FuelLevelCommand();
                fuelLevCmd.run(socket.getInputStream(), socket.getOutputStream());
                System.out.println("fuel level cmd result is : " + fuelLevCmd.getFormattedResult().toString());

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

                Thread.sleep(15 * 1000);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }


//      BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
//      String line;
//      while((line = br.readLine())!= null ) {
//          //debugging sys out
//          System.out.println("Line = " + line);
//
//      }


//            String engCoolant = new EngineCoolantTemperatureCommand().getFormattedResult();
//            System.out.println("Engine coolant temp is : " + engCoolant);
//            String rpm = new RPMCommand().getFormattedResult();
//            System.out.println("RPM is : " + rpm);

    }

}
