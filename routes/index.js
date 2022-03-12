var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Users CRUD' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log In ' });
});

/* GET home page. */
router.get('/logout', function(req, res, next) {
  res.render('logout', { title: 'Log Out' });
});

module.exports = router;
