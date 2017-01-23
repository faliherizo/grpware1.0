var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var message = new Schema({
    content:{type:String, required:true},
    groupname:{type:String, required:true},
    author:{type:Schema.ObjectId, ref:'Person'},
    thread:{type:Schema.ObjectId, ref:'Thread'}
});
module.exports= mongoose.model('Message', message);