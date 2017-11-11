var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

    var options = {
        method: 'GET',
        url: 'http://trv-ps-prod.eu-west-1.elasticbeanstalk.com/v1/interpretations',
        qs: { q: 'The best ski', l: 'CA' }

    };


});

module.exports = router;