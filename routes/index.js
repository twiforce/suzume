var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'suzume', subtitle: 'Node.JS danbooru-style imageboard'});
});

module.exports = router;
