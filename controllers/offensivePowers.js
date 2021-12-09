const express = require('express');
const router = express.Router();
const { offensivePowers } = require("../models");

// Get Route
router.get('/', function (req, res) {
    offensivePowers.findAll()
        .then(function (offensivePowersList) {
            res.render('offensivePowers/index', { offensivePowers: offensivePowersList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;