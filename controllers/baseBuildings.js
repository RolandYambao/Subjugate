const express = require('express');
const router = express.Router();
const { baseBuildings } = require("../models");

// Get Route
router.get('/', function (req, res) {
    baseBuildings.findAll()
        .then(function (baseBuildingsList) {
            res.render('baseBuildings/index', { baseBuildings: baseBuildingsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;