const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { title: "Flight Detail", flight });
    });
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
    
    if(req.body.departs == ''){
        let newDate =  new Date();
        let year = newDate.setFullYear(newDate.getFullYear() + 1);
        req.body.departs = year;
    }

    Flight.create(req.body, function(err, flightDocument) {
        console.log(err);
        
        if (err) return res.render('flights/new');
        console.log(flightDocument, " < This is the document I created");
        res.redirect('/flights');
    })
}