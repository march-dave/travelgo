var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:query/i/:international', function(req, res) {
    // Beer.findByIdAndUpdate({ id: req.params.id }, { $set: req.body }, { new: true }, (err, beer) => {
    //     res.status(err ? 400 : 200).send(err || beer);
    // });

    // var obj = JSON.parse(res).data;

    res.send(req.params.query + " : " + req.params.international);
});

module.exports = router;