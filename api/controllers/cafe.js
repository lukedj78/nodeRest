'use strict';

var Cafe = require('../models/cafe');

module.exports ={
index: function(req,res){
    Cafe.find({"name":{$ne:null}}, function(err,cafes){
        if(err){
            res.status(500).json(err).end();
            return;
        }

        res.json({
            cafes : cafes
        }).end();
    });
},

    create: function(req,res){

        var cafe = new Cafe(req.swagger.params.cafe.value.cafe);
        cafe.save(function(err){
            if(err){
                res.status(500).json(err).end();
                return;
            }

            res.json({
                cafe: cafe
            }).end();
        })
    }
}