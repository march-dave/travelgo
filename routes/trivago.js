var express = require('express');
var router = express.Router();
var request = require('request');

// router.get('/q/:qr/l/:international', function(req, res) {
router.get('/', function(req, res) {

    var options = {
        method: 'GET',
        url: 'http://trv-ps-prod.eu-west-1.elasticbeanstalk.com/v1/interpretations',
        qs: { q: req.query.qr, l: req.query.l, format: 'json' }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        res.send(body);
    });


});

module.exports = router