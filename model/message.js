var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var message = new Schema({
    content:{type:String, required:true},
    groupe:{type:Schema.ObjectId, ref:'Group'},
    from_person:{type:Schema.ObjectId, ref:'Person'},
    to_person:{type:Schema.ObjectId, ref:'Person'},
    thread:{type:Schema.ObjectId, ref:'Thread'}
});

module.exports= mongoose.model('Message', message);