import obd
# return list of valid USB or RF ports
ports = obd.scan_serial()  
# ['\\.\\COM4', '\\.\\COM5', '\\.\\COM6']    
print(ports)                    

#manual connection to port 5
connection = obd.OBD("\\.\\COM5")
print(connection.status())

# send the command, and parse the response
cmd = obd.commands["SPEED"]
response = connection.query(cmd, force=False) 
print(response.value) 
print(response.value.to("mph"))