var mongoose = require('mongoose');

module.exports = mongoose.model('ChildClothing', {
    type: {type: String, default:''}, 
    size: {type: String, default:''}, 
   	brand: {
        type: String,
        default: ''
    }
});