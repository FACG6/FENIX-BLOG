const connection = require('./../dbConnection');

exports.addComment = (commentInfo) => connection.query('insert into comments (postid, userid, comment) values ($1, $2, $3)', [commentInfo.postid, commentInfo.userid, commentInfo.comment]);
