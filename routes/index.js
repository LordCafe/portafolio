var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lord cafe' });
});


router.get('/chatdemo', function(req, res, next) {
  res.render('chat', { title: 'Lord cafe' });
});


router.get('/youtube', function(req, res, next) {
  res.render('youtube', { title: 'Lord cafe' });
});


router.get('/newsapi', function(req, res, next) {
  res.render('newsapi', { title: 'Lord cafe' });
});
module.exports = router;
