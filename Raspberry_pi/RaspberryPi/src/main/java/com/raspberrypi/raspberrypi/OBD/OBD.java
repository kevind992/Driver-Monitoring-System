package com.raspberrypi.raspberrypi.OBD;

import com.fazecast.jSerialComm.SerialPort;
import com.raspberrypi.raspberrypi.OBD.commands.protocol.*;
import com.raspberrypi.raspberrypi.OBD.commands.temperature.AmbientAirTemperatureCommand;
import com.raspberrypi.raspberrypi.OBD.enums.ObdProtocols;

public class OBD {

    public void getData(){


        System.out.println("In OBD package");
        //A Class for getting OBD Data

        SerialPort socket = SerialPort.getCommPorts()[1];
        System.out.println(socket.getDescriptivePortName());

        socket.openPort();
        socket.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 100, 0);

        // execute commands
        try {

            new EchoOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            new LineFeedOffCommand().run(socket.getInputStream(), socket.getOutputStream());
            new TimeoutCommand(125).run(socket.getInputStream(), socket.getOutputStream());
            new SelectProtocolCommand(ObdProtocols.AUTO).run(socket.getInputStream(), socket.getOutputStream());
            new AmbientAirTemperatureCommand().run(socket.getInputStream(), socket.getOutputStream());

        } catch (Exception e) {
            // handle errors
            System.out.println(e);
        }


    }


}
