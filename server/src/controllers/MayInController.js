const MAYIN = require('../models/MAYIN');

exports.FindByViTri = function(req, res){
    MAYIN.findByViTri(req.params.id, function(err, mayins){
        if(err){
            res.send(err);
        }else{
            res.send(mayins);
        }
    });
}

exports.FindByAttrAndKeyWord = function(req, res){
    MAYIN.findbyattrandkeyword(req.params.attr,req.params.keyword, function(err, mayins){
        if(err){
            res.send(err);
        }else{
            res.send(mayins);
        }
    });
}

exports.Index = function(req, res){
    MAYIN.findAll(function(err, mayins){
        if(err){
            res.send(err);
        }else{
            res.send(mayins);
        }
    });
}

exports.Store = function(req, res){
    let new_mayin = new MAYIN(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }else{
        MAYIN.create(new_mayin, function(err, mayin){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:'MAYIN added successfully!', data:mayin});
            }
        });
    }
}

exports.Update = function(req, res){
    MAYIN.update(new MAYIN(req.body), function(err, mayin){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'MAYIN successfully updated'});
        }
    });
}

exports.Delete = function(req, res){
    MAYIN.delete(req.params.ID, function(err, mayin){
        if(err){
            res.send(err);
        }else{
            res.json({error:false, message:'MAYIN successfully deleted'});
        }
    });
}