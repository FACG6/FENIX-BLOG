const requestIp = require('request-ip');

exports.landPage = (req, res) => {
  const clientIp = requestIp.getClientIp(req);
  console.log(1111111111, clientIp);
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  console.log('ip', ip);
  res.render('landPage', {
    styleName: 'land',
    domName: 'landDom',
    layout: 'land',
    title: 'Fenix'
  });
};