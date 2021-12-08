const express = require('express');
const router = express.Router();
const { factionBuildings } = require("../models");

// Get Route
router.get('/', function (req, res) {
    factionBuildings.findAll()
        .then(function (factionBuildingsList) {
            res.render('factionBuildings/index', { factionBuildings: factionBuildingsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;