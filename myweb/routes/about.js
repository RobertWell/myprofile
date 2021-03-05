var express = require('express');
var router = express.Router();
var page = ['', 'active'];
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('about', {title: 'About Robert Lin', page: page});
});

module.exports = router;
