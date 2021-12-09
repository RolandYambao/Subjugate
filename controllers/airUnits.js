const express = require('express');
const router = express.Router();
const { airUnits } = require("../models");
const { airComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    airUnits.findAll()
        .then(function (airUnitsList) {
            res.render('airUnits/index', { airUnits: airUnitsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;