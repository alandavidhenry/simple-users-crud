var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
