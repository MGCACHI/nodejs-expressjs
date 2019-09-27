var express = require('express');
var router = express.Router();

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

/* GET users listing. */
router.get('/',protected(), function(req, res, next) {
  res.send('hello');
});

module.exports = router;
