package com.raspberrypi.raspberrypi.OBD;

        import com.fazecast.jSerialComm.SerialPort;
        import com.raspberrypi.raspberrypi.OBD.commands.ObdCommand;
        import com.raspberrypi.raspberrypi.OBD.commands.engine.RPMCommand;
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

        SerialPort socket = SerialPort.getCommPorts()[1];
        System.out.println(socket.getDescriptivePortName());

        socket.openPort();
        socket.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 100, 100);
        System.out.println("opened ports on socket");

        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line;
        while((line = br.readLine())!= null ) {
            //debugging sys out
            System.out.println("Line = " + line);

        }

//        try {
//              EchoOffCommand echoCmd = new EchoOffCommand();
//              echoCmd.run(socket.getInputStream(), socket.getOutputStream());

//            new LineFeedOffCommand().run(socket.getInputStream(), socket.getOutputStream());
//            new TimeoutCommand(125).run(socket.getInputStream(), socket.getOutputStream());
//            new SelectProtocolCommand(ObdProtocols.AUTO).run(socket.getInputStream(), socket.getOutputStream());
//            AmbientAirTemperatureCommand ambTemp = new AmbientAirTemperatureCommand();
//            ambTemp.run(socket.getInputStream(), socket.getOutputStream());
//            while (true) {
//                String engCoolant = new EngineCoolantTemperatureCommand().getFormattedResult();
//                System.out.println("Engine coolant temp is : " + engCoolant);
//                String rpm = new RPMCommand().getFormattedResult();
//                System.out.println("RPM is : " + rpm);
//                Thread.sleep(10 * 1000);
//            }
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        // execute commands
//            ObdCommand command = new EngineCoolantTemperatureCommand();
//            command.run(socket.getInputStream(), socket.getOutputStream());
//            String res = command.getCalculatedResult();
//            System.out.println("result: " + res);
//            Thread.sleep(10 * 1000);

//            int readTO = socket.getReadTimeout();
//            System.out.println("read time out is: " + readTO);
//            int writeTO = socket.getWriteTimeout();
//            System.out.println("read time out is: " + writeTO);


//

//            catch (Exception e) {
        // handle errors
//            System.out.println(e);
//        }


    }


}
