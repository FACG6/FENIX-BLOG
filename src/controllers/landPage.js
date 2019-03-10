exports.landPage = (req, res) => {
  res.render('landPage', {
    styleName: 'land',
    domName: 'landDom',
    layout: 'land',
    title: 'Fenix'
  });
};