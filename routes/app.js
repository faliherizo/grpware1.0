var express = require('express');
var router = express.Router();
var Message= require('../model/message');
var Group= require('../model/group');
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
        _id:req.body.id,
        content:req.body.content,
        groupname:req.body.content,
        username:req.body.content,

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


router.post('/groups',function(req, res, next){
    var group = Group({
        name:req.body.name,
        imgSrc:req.body.imgSrc,
        user_created:req.body.user_created,
        description:req.body.description,

    });
    group.save(function(err,group){
        if(err){
            Group.find({})
                .populate('user_created')
                .populate('name')
                .exec(function(error, groups) {
                    console.log(JSON.stringify(groups, null, "\t"))
                })
        }
    });
});

router.get('/groups',function(req, res, next){
    Group.find(function (err,groups) {
        if(err){
            return res.status(500).json({
                message:'Error while get data'
            });
        }
        res.status(200).json({
            data:groups
        });
    });

});

router.post('/grp_inscription',function(req, res, next){
    //
    Group.findOneAndUpdate({ _id: req.body.id },
        { $push: { members: {_id:req.body.user} }}, function(err, group){
        if(err){
            return res.status(500).json({
               message:'Error'
            });
        }
        res.status(200).json({data:group});

    });

});

module.exports = router;
