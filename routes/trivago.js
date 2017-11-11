var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:query/l/:international', function(req, res) {

    // var obj = JSON.parse(res).data;
    // trivago/The best ski/i/us

    // res.send(req.params.query + " : " + req.params.international);
    // qs: { q: 'The best ski', l: 'US' }

    var q2 = req.params.query;
    var l2 = req.params.international;

    // res.send(req.params.query + " : " + req.params.international);

    var options = {
        method: 'GET',
        url: 'http://trv-ps-prod.eu-west-1.elasticbeanstalk.com/v1/interpretations',
        qs: { q: req.params.query, l: req.params.international, format: 'json' }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        // console.log(body);

        res.send(body);
    });


});

module.exports = router;