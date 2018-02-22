package com.raspberrypi.raspberrypi.Mongo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

@Component
public class DbSeeder implements CommandLineRunner {

    private DataRepository dataRepository;

    public  DbSeeder(DataRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        Data data1 = new Data(userData(),userData());

        List<Data> data = Arrays.asList(data1);

        this.dataRepository.save(data);

    }
    private String userData(){

        String input;

        Scanner scan = new Scanner(System.in);

        input = scan.nextLine();

        return input;
    }
}