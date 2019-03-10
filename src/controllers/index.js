const express = require('express');
const router = express.Router();

const { getSignUp, addUser } = require('./signup');
const { getlogin, checkUser } = require('./login');
const { get } = require('./home');
const { logedHome } =require('./logedHome');
const { clint, server} = require('./error');
const { logout } = require('./logout');
const { addPost } = require('./addPost');
const { addcomment } = require('./addcomment');

const { validatelogin } = require('./midllwear/validatelogin');
const { validatesignup } =require('./midllwear/validatesignin');
const { auth } = require('./midllwear/authcookies');
const { protect } = require('./midllwear/protict');
const { landPage } = require('./landPage');

router.route('/addcomment')
  .post(protect, addcomment)

router.route('/')
  .get(landPage)

router.route('/signup')
  .get(auth, getSignUp)
  .post(auth, validatesignup, addUser);

router.post('/logout', logout);

router.route('/login')
  .get(auth, getlogin)
  .post(auth, validatelogin, checkUser)

router.route('/addpost')
  .post(protect, addPost)

router.get('/Home', protect, logedHome);
router.get('/posts', auth, get);
router.use(clint);
router.use(server);


module.exports = router;
