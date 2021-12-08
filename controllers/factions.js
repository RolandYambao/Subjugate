const express = require('express');
const router = express.Router();
const { factions } = require("../models");

// Get Route
router.get('/', function (req, res) {
    factions.findAll()
        .then(function (factionList) {
            res.render('factions/index', { factions: factionList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;