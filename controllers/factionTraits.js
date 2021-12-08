const express = require('express');
const router = express.Router();
const { factionTraits } = require("../models");

// Get Route
router.get('/', function (req, res) {
    factionTraits.findAll()
        .then(function (factionTraitsList) {
            res.render('factionTraits/index', { factionTraits: factionTraitsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;