const express = require('express');
const fs = require('fs');

var newsRouter = express.Router();

let filter = function(){
    return function(req,res,next){
        if(req.params.id == id){
            next()
        }
        else{
            res.redirect('/news');
        }
    }
}

function ReturnFromDB(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                id : id,
                name : "jeolab"
            })
        }, 300);
    })
}

newsRouter.get('/',(req,res) => {
    res.redirect('/');
})

newsRouter.get('/add',(req,res) => {
    req.session.name = "Geolab";
    res.send('OK');
})

newsRouter.get('/:id',(req,res) => {
    ReturnFromDB(req.params.id)
    .then(function(response){
        res.cookie('name', 'tobi');
        console.log("cookie >>> ",req.cookies.name);
        res.render('news',{
            product : response,
            array : ["img1","img2"],
            test_sesion : req.session.name
        });
    })

})

/*newsRouter.get('/:id',filter(),(req,res)=>{
    res.send(req.params.id)    
})*/

module.exports = newsRouter;