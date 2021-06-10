const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true    
});

mongoose.connection.on('connected', function() {
    console.log('connected to MongoDB');
})
