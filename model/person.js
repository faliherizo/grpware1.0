var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: String,
    photo:{ type: String, required: false },
    username: { type: String, required: true, unique: true },
    isconnected:{ type:Boolean},
    location: {type:String},
    latitude:{ type: String, required: false },
    longitude:{ type: String, required: false },
    meta: {
        age: Number,
        website: String
    },
    created_at: { type:Date},
    updated_at: { type:Date}
});

var person = mongoose.model('Person', userSchema);

module.exports = Person;