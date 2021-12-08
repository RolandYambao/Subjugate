const express = require('express');
const router = express.Router();
const { factionPowers } = require("../models");

// Get Route
router.get('/', function (req, res) {
    factionPowers.findAll()
        .then(function (factionPowersList) {
            res.render('factionPowers/index', { factionPowers: factionPowersList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;