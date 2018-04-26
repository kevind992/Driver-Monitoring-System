# README.md
## Introduction
Within this repository contains our 3rd year group project for the module, Professional Practice in IT. For our project we developed a Driver monitoring system which uses an OBDII dongle to connect to a car, the OBDII dongle pulls the car sensor data onto a Raspberry Pi 3, does some calculations and generates a report. The Raspberry Pi starts the application without having to touch a mouse or keyboard. Just power it up and start driving. Once the report is created, the Raspberry pi will send the report to be stored on a MongoDB which is on a Digital Droplet. On the Digital Droplet we also have a node.js server which creates an API. To be able to view all the reports we created a Ionic application which gets all the reports from the API.
## Installation and Running
For installing and running the Driver Monitoring System please refer to the word documents within the Documents folder in the main repository. 
## Repository Structure
Due to multiple technologies being used within this project we decided to split them up into different folders. If you intend on running the code navigate into the particular section (i.e. Raspberry Pi) you wish to open and open that within your IDE. 
- The three word documents are within the Documents folder. 
- All the code for the Raspberry Pi / Laptop are within the Raspberry Pi folder. 
- All the code within that is being used on the Digital Droplet are within the Server folder. 
- The code for the Ionic app is within the Mobile App folder. 
- We included a folder called Test Application which includes test spring applications.  
## Technologies
- Raspberry Pi
  - Spring Boot https://spring.io/
  - OBDII Dongle https://www.amazon.com/Bluetooth-Diagnostic-Scanner-Engine-Reader/dp/B0051CAE1C
  - jSerialComm API http://fazecast.github.io/jSerialComm/
  - Pires OBD API https://github.com/pires/obd-java-api
- Server
  - Digital Ocean https://www.digitalocean.com/
  - MongoDB https://www.mongodb.com/
  - Node.js https://nodejs.org/en/
  - Cors https://www.npmjs.com/package/cors
  - Express https://www.npmjs.com/package/express
  - Mongoose http://mongoosejs.com/
  - Body Parser https://www.npmjs.com/package/body-parser
- Phone Application
  - Ionic https://ionicframework.com/
  - Xcode https://developer.apple.com/xcode/
  - Node.js https://nodejs.org/en/
- Code Editors Used
  - IntelliJ Idea https://www.jetbrains.com/idea/
  - Visual Studio Code https://code.visualstudio.com/
  - Nano https://en.wikipedia.org/wiki/GNU_nano
## Contributors
- Kevin Delassus
- Michael Curley
- Shane Daniels
## References
- https://www.elmelectronics.com/help/obd/tips/#UnderstandingOBD
- https://www.elmelectronics.com/help/obd/tips/#327_Commands
- https://www.theregister.co.uk/2017/01/11/mongodb_ransomware_followup/
- https://www.youtube.com/watch?v=eB9Fq9I5ocs
- https://stackoverflow.com/questions/12701259/how-to-make-a-node-js-application-run-permanently
- https://www.digitalocean.com/community/tutorials/how-to-use-the-mongodb-one-click-application
- https://www.youtube.com/watch?v=Hu-cyytqfp8
- https://www.raspberrypi.org/forums/viewtopic.php?t=125922
- https://www.raspberrypi.org/forums/viewtopic.php?t=174327#p1115281
