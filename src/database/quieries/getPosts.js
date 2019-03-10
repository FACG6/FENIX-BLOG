const connect = require('./../dbConnection');

const getPosts = () => connect.query(
  'select posts.*, users.name, users.userid from posts join users on users.userid = posts.userid'
);
const getComments = postId => connect.query(
  'select * from comments join users on users.userid = comments.userid where postId = $1 ', [postId],
);

module.exports = {
  getPosts,
  getComments,
};






















// const connect = require('./../dbConnection.js');

// const getPosts = (cb) => connect.query('select posts.post, posts.postid, posts.userid as post_owner_id, (select name from users where userid = posts.userid) as post_owner_name, comments.commentid, comment, (select name from users where comments.userid = userid) from comments right join posts on comments.postid = posts.postid order by posts.postid;', cb);

// getPosts((err, res) => {
//   if (err) console.log(1111111, err)
//   console.log(res.rows)
// });

// const editPost = (array) => {
//   const final = []
//   for (let i = 0; i < array.length; i++) {
//     final.push(array[i]);
//     var num = 0;
//     for (let z = i + 1; array.length; z++) {
//       if (array[i].postid === array[z].postid){
//         num++;
//       }
//     }
//     for(a = 0; a < num; a++){
//       final[i]
//     }
//   }
// }
// module.exports = getPosts;