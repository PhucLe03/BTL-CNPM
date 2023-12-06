const VITRI = require('../models/VITRI');

exports.FindByAttrAndKeyWord = function(req, res){
    VITRI.findByAttrAndKeyWord(req.params.attr, req.params.keyword, function(err, vitris){
        if(err){
            res.send(err);
        }else{
            res.send(vitris);
        }
    })
}

exports.Index = function(req, res){
    VITRI.findAll(function(err, vitris){
        if(err){
            res.send(err);
        }else{
            res.send(vitris);
        }
    });
}

exports.FindByAttrByKeyword = function(req,res){
    VITRI.findByAttrByKeyword(req.params.attr, req.params.keyword, function(err, vitris){
        if(err){
            res.send(err);
        }else{
            res.send(vitris);
        }
    })
}

exports.FindByAttrOrder = function(req,res){
    VITRI.findByAttrOrder(req.params.attr, req.params.order, function(err, vitris){
        if(err){
            res.send(err);
        }else{
            res.send(vitris);
        }
    })
}

exports.Store = function(req, res){
    let new_VITRI = new VITRI(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }else{
        VITRI.create(new_VITRI, function(err, VITRI){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:'VITRI added successfully!', data:VITRI});
            }
        });
    }
}

exports.Update = function(req, res){
    VITRI.update(new VITRI(req.body), function(err, VITRI){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'VITRI successfully updated'});
        }
    });
}

exports.Delete = function(req, res){
    VITRI.delete(req.params.id, function(err, VITRI){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'VITRI successfully deleted'});
        }
    });
}