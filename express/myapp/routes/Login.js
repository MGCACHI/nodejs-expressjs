var express = require('express');
var router = express.Router();

router.get('/',(req,res) => {
    res.render('login');
})

router.post('/',(req,res) => {
    if(req.body.Name == "Archil" && req.body.Pass == "achi2019"){
        let obj = {
            Name : req.body.Name,
            Password : req.body.Pass
        }
        req.session.User = obj;
        res.redirect('/');
    }
})

function protected(){
    return function(req,res,next){
      if(req.session.User){
        next();
      }
      else
      {
        res.redirect('/');
      }
    }
  }

router.get('/logout',protected(),function(req,res){
    req.session.User = null; 
    
    res.redirect('/');
})

module.exports = router;