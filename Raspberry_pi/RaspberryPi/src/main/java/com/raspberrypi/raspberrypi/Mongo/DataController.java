package com.raspberrypi.raspberrypi.Mongo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {

    // Getting instance of DataRepository
    private DataRepository dataRepository;

    //Constructor
    public DataController(DataRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    //Handling the mapping
    @GetMapping("/all")
    public List<Data> getAll(){

        //Getting data from Mongodb
        List<Data> data = this.dataRepository.findAll();

        return data;
    }

}
