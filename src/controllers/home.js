const { getPosts, getComments } = require('./../database/quieries/getPosts.js');

exports.get = (request, response) => {
  getPosts().then((res) => {
    const fetchesCommenst = [];
    res.rows.forEach((element) => {
      const elementClone = { ...element };
      fetchesCommenst.push(getComments(element.postid).then((resComments) => {
        elementClone.comments = resComments.rows;
        return elementClone;
      }));
    });
    return Promise.all(fetchesCommenst);
  }).then((a) => { response.render('home', { domName: 'homeDom', styleName: 'home', ruesult: a }); });
};
