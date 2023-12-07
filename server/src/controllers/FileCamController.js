const FILECAM = require('../models/FILECAM');

exports.D4PageUpdate = function(req, res){
    FILECAM.d4pageupdate(req.params.page, function(err, filecams){
        if(err){
            res.send(err);
        }else{
            res.send(filecams);
        }
    }
    )
}


exports.FindByAttrByKeyword = function(req,res){
    FILECAM.findByAttrByKeyword(req.params.attr, req.params.keyword, function(err, filecams){
        if(err){
            res.send(err);
        }else{
            res.send(filecams);
        }
    })
}


exports.Index = function(req, res){
    FILECAM.findAll(function(err, filecams){
        if(err){
            res.send(err);
        }else{
            res.send(filecams);
        }
    });
}

exports.Store = function(req, res){
    let new_FILECAM = new FILECAM(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }else{
        FILECAM.create(new_FILECAM, function(err, FILECAM){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:'FILECAM added successfully!', data:FILECAM});
            }
        });
    }
}

exports.Update = function(req, res){
    FILECAM.update(new FILECAM(req.body), function(err, FILECAM){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'FILECAM successfully updated'});
        }
    });
}

exports.Delete = function(req, res){
    FILECAM.delete(req.params.id, function(err, FILECAM){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'FILECAM successfully deleted'});
        }
    });
}