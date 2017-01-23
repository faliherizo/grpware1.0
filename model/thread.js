/**
 * Created by Faliherizo on 02/01/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name:{ type:  String},
    lastMessage:{type:Schema.ObjectId, ref:'Message'},
});

var Thread = mongoose.model('Thread', userSchema);

module.exports = Thread;