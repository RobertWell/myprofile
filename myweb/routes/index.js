var express = require('express');
var router = express.Router();
let page=['active']
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robert Lin Profolio', fname: 'Robert', lname: 'Lin',page: page });
});

module.exports = router;
