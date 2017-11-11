var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:query/i/:international', function(req, res) {
    // Beer.findByIdAndUpdate({ id: req.params.id }, { $set: req.body }, { new: true }, (err, beer) => {
    //     res.status(err ? 400 : 200).send(err || beer);
    // });

    // var obj = JSON.parse(res).data;
    // trivago/The best ski/i/us

    res.send(req.params.query + " : " + req.params.international);
    // qs: { q: 'The best ski', l: 'US' }

    var q2 = req.params.query;
    var l2 = req.params.international;

    var options = {
        method: 'GET',
        url: 'http://trv-ps-prod.eu-west-1.elasticbeanstalk.com/v1/interpretations',
        qs: { q: q2, l: l2 }
    };

    // request(options, function(error, response, body) {
    //     if (error) throw new Error(error);

    //     console.log(body);

    //     res.send(body);
    // });


});

module.exports = router;