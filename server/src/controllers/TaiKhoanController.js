const TAIKHOAN = require('../models/TAIKHOAN');

exports.Index = function(req, res){
    TAIKHOAN.findAll(function(err, taikhoans){
        if(err){
            res.send(err);
        }else{
            res.send(taikhoans);
        }
    });
}

exports.FindByAttrByKeyword = function(req,res){
    TAIKHOAN.findByAttrByKeyword(req.params.attr, req.params.keyword, function(err, taikhoans){
        if(err){
            res.send(err);
        }else{
            res.send(taikhoans);
        }
    })
}

exports.FindByAttrOrder = function(req,res){
    TAIKHOAN.findByAttrOrder(req.params.attr, req.params.order, function(err, taikhoans){
        if(err){
            res.send(err);
        }else{
            res.send(taikhoans);
        }
    })
}

exports.Store = function(req, res){
    let new_TAIKHOAN = new TAIKHOAN(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }else{
        TAIKHOAN.create(new_TAIKHOAN, function(err, TAIKHOAN){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:'TAIKHOAN added successfully!', data:TAIKHOAN});
            }
        });
    }
}

exports.Update = function(req, res){
    TAIKHOAN.update(new TAIKHOAN(req.body), function(err, TAIKHOAN){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'TAIKHOAN successfully updated'});
        }
    });
}

exports.Delete = function(req, res){
    TAIKHOAN.delete(req.params.maTAIKHOAN, function(err, TAIKHOAN){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'TAIKHOAN successfully deleted'});
        }
    });
}