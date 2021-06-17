const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: String,
    arrival: Date
}, {
    timestamps: true
});


const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String, 
    flightNo: {type: Number, min: 10, max: 9999}, 
    departs:  {
        type: Date,
        default: function () {
            console.log(Date.getDateYear());
            return getDateYear();
        }
    },
    destinations: [destinationSchema],
}, {
    timestamps: true
});

const Flight = mongoose.model('Flight', flightSchema);

console.log(Flight);
module.exports = Flight;
