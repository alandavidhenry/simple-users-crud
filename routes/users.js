var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

/* GET user. */
router.get('/:id', function(req, res, next) {
  res.send('view user profile');
});

/* GET user. */
router.get('/new-user', function(req, res, next) {
  res.render('new-user');
});

/* GET user. */
router.get('/:id/edit', function(req, res, next) {
  res.send('edit user profile');
});

module.exports = router;
