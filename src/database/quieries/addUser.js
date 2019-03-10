const connection = require('./../dbConnection');

exports.addUsers = (userInfo) => {
  connection.query('insert into users (name, email, password) values ($1, $2, $3)', [userInfo.name, userInfo.email, userInfo.password]);
}