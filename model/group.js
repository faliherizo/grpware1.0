var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
   name:{type:String, required:true},
   imgSrc:{type:String, required:false},
   user_created:{type:String, ref:'Person'},
   description:{type:String, required:false},
   members:[{
      type:Schema.ObjectId,ref:'Person'
   }]
});

module.exports= mongoose.model('Group', groupSchema);