var express = require('express');
var router = express.Router();

var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');

    var options = {
        method: 'GET',
        url: 'http://trv-ps-prod.eu-west-1.elasticbeanstalk.com/v1/interpretations',
        qs: { q: 'The best ski', l: 'CA' }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });


});

module.exports = router;