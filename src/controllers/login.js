const { checkEmail } = require('./../database/quieries/checkEmail');
const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');
require('dotenv').config();

exports.getlogin = (req, res) => {
  res.render('login', {
    styleName: 'login',
    domName: 'loginDom'
  });
};

exports.checkUser = (req, res) => {  
  checkEmail(req.body.email)
    .then((result) => {
      if (!result.rowCount) {
        res.send({
          msg: 'email not found'
        });
      } else {
        bcrypt.compare(req.body.password, result.rows[0].password)
          .then((ToF) => {
            if (ToF) {
              const payload = {
                userId: result.rows[0].userid,
                name: result.rows[0].name,
              };
              const jwt = sign(payload, process.env.SECRET);
              res.cookie('jwt', jwt, {
                maxAge: 7200000,
                httpOnly: true,
              })
              req.user = true;
              res.send({
                msg: 'password is corrict'
              })
            } else {
              res.send({
                msg: 'the password is not corrict'
              })
            }
          })
          .catch((err) => {
            console.log(1111111, err)
            res.send({
              msg: 'error in login'
            })
          })
      }
    })
    .catch((err) => {
      console.log(222222, err)
      res.send({
        msg: 'error from database'
      })
    })
};