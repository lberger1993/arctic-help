
var mongoose = require('mongoose');

module.exports = mongoose.model('branch_table', {
    name: {
    	type: String,
        default: ''
    }, 
    description: {
    	type: String,
        default: ''
    },
    lat:  {
    	type: String, 
        default: ''
    }, 
    lng:  {
        type: String,
        default: ''
    }
});

