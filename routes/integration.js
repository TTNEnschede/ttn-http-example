const model = require('../model/data');
const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function (req, res) {

    var auth_token = req.headers['authorization'];

    if (!auth_token) {
        res.status(403).json({message: 'Not authorization token'});
    } else {
        jwt.verify(auth_token, 'secret', function(err, decoded) {
            console.log(decoded);
            if (decoded) {
                model.data.push({ message: "temp", time: 'now' });
                return res.status(200).json({message: 'Valid token!'});
            } else {
                res.status(200).json({message: 'Testing'});
            }
        });
    }
});


router.get('/', function (req, res) {
    res.status(200).json(model.data);
});

router.get('/clear', function (req, res) {
    model.data = [];
    res.status(200).json(model.data);
});

module.exports = router;