# README.md
## Introduction
Within this repository containes our 3rd year group project for the module, Professional Practice in IT. For our project we developed a Driver monitoring system which uses an OBDII dongle to connect to a car, the OBDII dongle pulls the car sensor data onto a Raspberry Pi 3, does some calculations and generates a report. Once the report is created, the Raspberry pi would send the report to be stored on a MongoDB on a Digital Droplet. On the Digital Droplet we also have a node.js server which creates an API. To be able to view all the reports we created a Ionic application which gets all the reports from the API.
## Installation and Running
For installing and running the Driver Monitoring System please refer to the word documents within the Documents folder in the main repository. 
## Repository Structure
Due to multiple technologies being used within this project we decided to split them up into different folders. 
- The three word documents are within the Documents folder. 
- All the code for the Raspberry Pi / Laptop are within the Raspberry Pi folder. 
- All the code within that is being used on the Digital Droplet are within the Server folder. 
- The code for the Ionic app is within the Mobile App folder. 
- We included a folder called Test Application which includes test spring applications.  
## Technologies
- Raspberry Pi
  - Spring Boot https://spring.io/
  - OBDII Dongle https://www.amazon.com/Bluetooth-Diagnostic-Scanner-Engine-Reader/dp/B0051CAE1C
  - jSerialComm API
  - Pires OBD API
- Server
  - Digital Ocean
  - MongoDB
  - Node.js
  - Cors
  - Express
  - Mongoose
  - Body Parser
- Phone Application
  - Ionic
  - Xcode
  - Node.js
## Contributors
## References
