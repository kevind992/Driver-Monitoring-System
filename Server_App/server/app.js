var cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(cors());

Data = require('./models/data.js');

//Connecting to MongoDB using Mongoose
var options = {
        user: "student1",
        pass: "software2018",
        auth: {
                authdb: 'admin'
        }
};

var mongooseConnectionString = 'mongodb:/' + '/167.99.202.48:27017/reports';

mongoose.connect(mongooseConnectionString, options);
console.log('Connected to mongoose..');
var db = mongoose.connection;

app.get('/',function(req, res){
        res.send('Please use /api/data');
});

app.get('/api/data',function(req, res){
        console.log(res.body);
		 Data.getData(function(err, data){

                if(err){
                        throw err;
                }
                res.json(data);
        });
});

app.listen(80);
console.log('Running on port 80...');