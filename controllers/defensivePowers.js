const express = require('express');
const router = express.Router();
const { defensivePowers } = require("../models");
const { defensivePowComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    defensivePowers.findAll()
        .then(function (defensivePowersList) {
            defensivePowComments.findAll()
                .then(function (defensivePowCommentsList) {
                    res.render('defensivePowers/index', { defensivePowers: defensivePowersList, defensivePowComments: defensivePowCommentsList });
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