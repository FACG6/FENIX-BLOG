const bcrypt = require('bcryptjs');
const {
  addUsers
} = require('./../database/quieries/addUser');
const {
  checkEmail
} = require('./../database/quieries/checkEmail');

const hashPass = (password) => {
  return bcrypt.hash(password, 10);
};

exports.getSignUp = (req, res) => {
  res.render('signup', {
    styleName: 'signup',
    domName: 'signupDom',
    defaultLayout: 'main'
  });
};

exports.addUser = (req, res) => {
  checkEmail(req.body.email)
    .then((result) => {
      if (result.rowCount) {
        res.send({
          msg: 'The email alredy exists'
        })
      } else {
        bcrypt.hash(req.body.password, 10)
          .then((hash) => {
            req.body.password = hash;
            return req.body;
          })
          .then(addUsers)
          .then(() => res.send({
            msg: 'User add successfully'
          }))
      }
    })
    .catch((err) => {
      res.send({
        msg: 'Error in add user try again',
        error: err,
      })
    });
};