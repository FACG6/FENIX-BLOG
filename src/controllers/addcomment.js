const { addComment } =require('./../database/quieries/addComment');

exports.addcomment = (req, res) => {

  const commentInfo = {
    postid: req.body.postid,
    userid: req.token.userId,
    comment: req.body.content
  };
  addComment(commentInfo)
  .then(() => res.send({msg: 'Comment add successfully'}))
  .catch((err) => res.send({msg: 'error from add comment'}))
};
