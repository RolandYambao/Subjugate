const express = require('express');
const router = express.Router();
const { defensiveBuildings } = require("../models");

// Get Route
router.get('/', function (req, res) {
    defensiveBuildings.findAll()
        .then(function (defensiveBuildingsList) {
            res.render('defensiveBuildings/index', { defensiveBuildings: defensiveBuildingsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;