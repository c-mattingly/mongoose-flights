const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create,
};

function create(req, res){
    Flight.findById(req.params.id, function(err, flight) {
        req.body.flight = flight._id;
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${req.params.id}`)

        })
    })
}


function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({}, function (err, tickets) {
            res.render('tickets/new', {
                title: 'Add Ticket',
                tickets, 
                flight
            });
        });
    })
}