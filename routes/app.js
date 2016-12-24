var express = require('express');
var router = express.Router();
var Message= require('../model/message')
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/message', function(req, res, next) {
    Message.find(function (err,messages) {
        if(err){
            return res.status(500).json({
                message:'Error while saving data'
            });
        }
        res.status(200).json({
            data:messages
        });
    });
});
router.post('/message',function (req, res, next) {
    var message = Message({
        content:req.body.content,
        groupname:req.body.content,
        username:req.body.content
    });
    message.save(function (err, result) {
        if(err){
            return res.status(500).json({
                message:'Error while saving data'
            });
        }
        res.status(201).json({
            message:'Error while saving data'
        });
    });

});

module.exports = router;
