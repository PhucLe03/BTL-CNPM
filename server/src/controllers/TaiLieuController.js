const TAILIEU = require('../models/TAILIEU');

exports.FindByAttrByKeyword = function(req,res){
    TAILIEU.findByAttrByKeyword(req.params.attr, req.params.keyword, function(err, tailieus){
        if(err){
            res.send(err);
        }else{
            res.send(tailieus);
        }
    })
}


exports.Index = function(req, res){
    TAILIEU.findAll(function(err, tailieus){
        if(err){
            res.send(err);
        }else{
            res.send(tailieus);
        }
    });
}

exports.FindByAttrByKeyword = function(req,res){
    TAILIEU.findByAttrByKeyword(req.params.attr, req.params.keyword, function(err, tailieus){
        if(err){
            res.send(err);
        }else{
            res.send(tailieus);
        }
    })
}

exports.FindByAttrOrder = function(req,res){
    TAILIEU.findByAttrOrder(req.params.attr, req.params.order, function(err, tailieus){
        if(err){
            res.send(err);
        }else{
            res.send(tailieus);
        }
    })
}

exports.Store = function(req, res){
    let new_TAILIEU = new TAILIEU(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }else{
        TAILIEU.create(new_TAILIEU, function(err, TAILIEU){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:'TAILIEU added successfully!', data:TAILIEU});
            }
        });
    }
}

exports.Update = function(req, res){
    TAILIEU.update(new TAILIEU(req.body), function(err, TAILIEU){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'TAILIEU successfully updated'});
        }
    });
}

exports.Delete = function(req, res){
    TAILIEU.delete(req.params.id, function(err, TAILIEU){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'TAILIEU successfully deleted'});
        }
    });
}