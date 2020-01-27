var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lord cafe' });
});


router.get('/chatdemo', function(req, res, next) {
  res.render('chat', { title: 'Lord cafe' });
});
module.exports = router;
