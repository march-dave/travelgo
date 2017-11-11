var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/q/:query/l/:international', function(req, res) {
    var q2 = req.params.q;
    var l2 = req.params.l;

    res.send(req.params.q + " : " + req);

    console.log(req);

    // var options = {
    //     method: 'GET',
    //     url: 'http://trv-ps-prod.eu-west-1.elasticbeanstalk.com/v1/interpretations',
    //     qs: { q: req.params.query, l: req.params.international, format: 'json' }
    // };

    // request(options, function(error, response, body) {
    //     if (error) throw new Error(error);

    //     res.send(body);
    // });


});

// router.get('/q/:qr/l/:international', function(req, res) {
router.get('/', function(req, res) {

    // var obj = JSON.parse(res).data;
    // trivago/The best ski/i/us

    // res.send(req.params.query + " : " + req.params.international);
    // qs: { q: 'The best ski', l: 'US' }

    var q2 = req.params.qr;
    var l2 = req.params.l;

    // req.query.color

    res.send(req.query.qr + " : " + req.query.l);

    // var options = {
    //     method: 'GET',
    //     url: 'http://trv-ps-prod.eu-west-1.elasticbeanstalk.com/v1/interpretations',
    //     qs: { q: req.params.query, l: req.params.international, format: 'json' }
    // };

    // request(options, function(error, response, body) {
    //     if (error) throw new Error(error);

    //     res.send(body);
    // });


});

module.exports = router