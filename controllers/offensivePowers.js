const express = require('express');
const router = express.Router();
const { offensivePowers } = require("../models");
const { offensiveComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    offensivePowers.findAll()
        .then(function (offensivePowersList) {
            offensiveComments.findAll()
                .then(function (offensiveCommentsList) {
                    res.render('offensivePowers/index', { offensivePowers: offensivePowersList, offensiveComments: offensiveCommentsList });
                })
                .catch(function (err) {
                    console.log('ERROR', err);
                    res.json({ message: 'Error occured, please try again....' });
                });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;