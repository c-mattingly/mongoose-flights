const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res) {
    res.render('flights/new')
}

function index(req, res) {
    Flight.find({}, function(err, allFlightDocuments){
        console.log(allFlightDocuments);
        res.render('flights/index', {
            flights: allFlightDocuments
        })
    })
}

function create(req, res) {
    Flight.create(req.body, function(err, flightDocument) {
        console.log(err);
        if (err) return res.render('flights/new');
        console.log(flightDocument, " < This is the document I created");
        res.redirect('/flights');
    })
}