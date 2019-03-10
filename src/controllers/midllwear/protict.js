const { verify } = require('jsonwebtoken');
require('dotenv').config();

exports.protect = (req, res, next) => {
  if(req.cookies.jwt){
    verify(req.cookies.jwt, process.env.SECRET, (err, token) => {
      if (err) {
        res.redirect('/login');
      } else {
        req.token = token;        
        next()
      }
    });
  }else{
    res.status(401).send('status 401 you are not authrize');
  }
};
