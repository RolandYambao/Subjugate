const express = require('express');
const router = express.Router();
const { statusPowers } = require("../models");
const { statusComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    statusPowers.findAll()
        .then(function (statusPowersList) {
            statusComments.findAll()
                .then(function (statusCommentsList) {
                    res.render('statusPowers/index', { statusPowers: statusPowersList, statusComments: statusCommentsList });
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