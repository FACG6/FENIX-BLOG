exports.clint = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    errMsg: 'Page Not Found'
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    layout: 'error',
    errMsg: 'Internal Server Error'
  });
};
