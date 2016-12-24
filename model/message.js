var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var message = new Schema({
    content:{type:String, required:true},
    groupname:{type:String, required:true},
    username:{type:String, required:true}

});


module.exports= mongoose.model('Message', message);