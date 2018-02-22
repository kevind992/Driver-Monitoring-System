package com.raspberrypi.raspberrypi.Mongo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {

    private DataRepository dataRepository;

    public DataController(DataRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    @GetMapping("/all")
    public List<Data> getAll(){

        List<Data> data = this.dataRepository.findAll();

        return data;
    }

}
