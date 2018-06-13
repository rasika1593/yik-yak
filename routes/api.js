var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){
    var resource = req.params.resource;
    var controller = controllers[resource]

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request:  ' + resource 
        })
        return
    }

    controller.find(req.query, function(err, results){
        if(err){
            res.json({
                  confirmation : 'fail',
                  message : err  
            })
            return
        }
        res.json({
          confirmation:'success',
          results: results
        })  
    })

    // if(resource == 'zone'){
    //     ZoneController.find(req.query, function(err, results){
    //       if(err){
    //           res.json({
    //                 confirmation : 'fail',
    //                 message : err  
    //           })
    //           return
    //       }
    //       res.json({
    //         confirmation:'success',
    //         resource: results
    //       })  
    //     })
    // }

   
})
router.get('/:resource/:id', function(req, res, next){
    var resource = req.params.resource;
    var id = req.params.id;

    var controller = controllers[resource]

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request:  ' + resource 
        })
        return
    }

    controller.findById(id, function(err, result){
        if(err){
            res.json({
                  confirmation : 'fail',
                  message : 'Not Found'  
            })
            return
        }
        res.json({
            confirmation:'success',
            result: result
          }) 
    })

    // if(resource == 'zone'){
    //     ZoneController.findById(id, function(err, result){
    //         if(err){
    //             res.json({
    //                   confirmation : 'fail',
    //                   message : 'Not Found'  
    //             })
    //             return
    //         }
    //         res.json({
    //             confirmation:'success',
    //             resource: result
    //           }) 
    //     })
    // }
})

router.post('/:resource', function(req, res, next){
    var resource = req.params.resource;

    var controller = controllers[resource]

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request:  ' + resource 
        })
        return
    }

    controller.create(req.body, function(err, result){
        if(err){
            res.json({
                  confirmation : 'fail',
                  message : err  
            })
            return
        }
        res.json({
            confirmation:'success',
            resource: result
          }) 
    })

    // if(resource == 'zone'){
    //     ZoneController.create(req.body, function(err, result){
    //         if(err){
    //             res.json({
    //                   confirmation : 'fail',
    //                   message : err  
    //             })
    //             return
    //         }
    //         res.json({
    //             confirmation:'success',
    //             resource: result
    //           }) 
    //     })
    // }
})
module.exports = router