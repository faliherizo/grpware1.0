var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   //id:{type:ObjectId,required: true, unique: true},
   name:{type:String, required:true},
   photo:{type:String, required:false},
   user:{type:String, required:true},
   description:{type:String, required:false},
   member:[{
      username:{type:String},
   }]
});

module.exports= mongoose.model('Group', schema);