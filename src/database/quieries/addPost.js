const connection = require('./../dbConnection');

exports.addPost = (postInfo) => connection.query('insert into posts (userid, post, posttype) values ($1, $2, $3)', [postInfo.userid, postInfo.content, postInfo.type]);
