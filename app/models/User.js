var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
   	givenName: {type: String, default:''}, 
    surname: {type: String, default:''},
    email: {type: String, default:''},
    password:{type: String, default:''}
});