const express = require('express');
const router = express.Router();
const { factionUnits } = require("../models");

// Get Route
router.get('/', function (req, res) {
    factionUnits.findAll()
        .then(function (factionUnitsList) {
            res.render('factionUnits/index', { factionUnits: factionUnitsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;