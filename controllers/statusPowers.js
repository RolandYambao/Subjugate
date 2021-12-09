const express = require('express');
const router = express.Router();
const { statusPowers } = require("../models");

// Get Route
router.get('/', function (req, res) {
    statusPowers.findAll()
        .then(function (statusPowersList) {
            res.render('statusPowers/index', { statusPowers: statusPowersList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;