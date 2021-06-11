const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String, 
    flightNo: Number, 
    departs: Date
})

const Flight = mongoose.model('Flight', flightSchema);

console.log(Flight);
module.exports = Flight;