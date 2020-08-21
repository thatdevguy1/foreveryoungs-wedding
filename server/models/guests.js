var mongoose = require('mongoose');

// Guests Schema
var GuestsSchema = mongoose.Schema({
	name: {
		type: String
    }, 
    attending: {
        type: Boolean
    }
});

module.exports = mongoose.model('Guests', GuestsSchema);