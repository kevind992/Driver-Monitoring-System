var mongoose = require('mongoose');
// Data Schema
var dataSchema = mongoose.Schema({
	
         _id: String,
         _class: String,
         vin: String,
         date: String,
         time; String,
         repAvgSpeed: String,
         repHighestRPM: String,
         repDistance: String,
         speedList: [Number],
         rpmList: [Number]
		 
});
var Data = module.exports = mongoose.model('data', dataSchema);
// Get Data
module.exports.getData = function(callback, limit){
         Data.find(callback).limit(limit);
}