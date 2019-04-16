var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    nama: {type: String, required: true, unique: true},
    /*email: {type: String, required: true, unique: true},
    pesan: {type: String, required: true}*/
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
