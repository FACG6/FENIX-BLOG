const connect = require('./../dbConnection');

exports.checkEmail = (email) => connect.query('select * from users where email = $1', [email]);
