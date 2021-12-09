const express = require('express');
const router = express.Router();
const { defensivePowers } = require("../models");

// Get Route
router.get('/', function (req, res) {
    defensivePowers.findAll()
        .then(function (defensivePowersList) {
            res.render('defensivePowers/index', { defensivePowers: defensivePowersList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;