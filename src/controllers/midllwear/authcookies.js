const { verify } = require('jsonwebtoken')
require('dotenv').config();

exports.auth = (req, res, next) => {
  if (req.cookies.jwt) {
    verify(req.cookies.jwt, process.env.SECRET, (err, token) => {
      if (err) {
        res.clearCookie('jwt');
        res.redirect('/login');
      } else {
        req.token = token;
        res.redirect('/home')
      }
    });
  } else {
    next(); 
  };
};

