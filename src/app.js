const express = require('express');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/index');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5555);
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main'
}));
app.use(controllers);

module.exports = app;
