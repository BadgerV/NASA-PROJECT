const mongoose = require('mongoose');

const launchesSchema = mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        type : Date,
        required: true,
    },
    mission : {
        type : String,
        required : String
    },
    rocket : {
        type : String,
        required : true
    },
    target : {
        type: String
    },
    customers : [String],
    upcoming : {
        type: Boolean,
        required: true
    },
    success : {
         type : Boolean,
         required: true,
         default : true
    }
});


//connects launchesSchea with the "launches" collection
module.exports = mongoose.model('Launch', launchesSchema);