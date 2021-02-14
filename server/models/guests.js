var mongoose = require('mongoose');

// Guests Schema *maybe change to none plural naming convention
var GuestsSchema = mongoose.Schema({
	name: {
		type: String
    }, 
    attending: {
        type: Boolean
    },
    group: {
        type: Number
    }
});

module.exports = mongoose.model('Guests', GuestsSchema);