const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flightDoc){
        Ticket.find(
            {flight: flightDoc._id},
            function(err, ticketsDocs){
                res.render('flights/show', {
                    title: 'Flight Detail',
                    flight: flightDoc,
                    tickets: ticketsDocs });
            }
        )
});
}

function newFlight(req, res) {
    res.render('flights/new')
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        console.log(flights);
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function create(req, res) {
    
    if(req.body.departs == ''){
        let newDate =  new Date();
        let year = newDate.setFullYear(newDate.getFullYear() + 1);
        req.body.departs = year;
    }

    Flight.create(req.body, function(err, flight) {
        console.log(err);
        
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    })
}