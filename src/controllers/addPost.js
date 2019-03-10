const { addPost } = require('./../database/quieries/addPost');

exports.addPost = (req, res) => {
  const postInfo = {
    userid: req.token.userId,
    content: req.body.content,
    type: true
  };
  addPost(postInfo)
  .then(() => res.send({msg: 'Post add successfully'}))
  .catch((err) => res.send({msg: 'error from add post'}))
};
