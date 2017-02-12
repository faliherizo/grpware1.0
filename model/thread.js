/**
 * Created by Faliherizo on 02/01/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var threadSchema = new Schema({
    name:{ type:  String},
    lastMessage:{type:Schema.ObjectId, ref:'Message'},
});

var Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;