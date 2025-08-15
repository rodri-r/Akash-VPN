var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET hello world endpoint */
router.get('/hello', function(req, res) {
  res.send('hello world');
});

module.exports = router;
