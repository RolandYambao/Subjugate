const express = require('express');
const router = express.Router();
const { groundUnits } = require("../models");

// Get Route
router.get('/', function (req, res) {
    groundUnits.findAll()
        .then(function (groundUnitsList) {
            res.render('groundUnits/index', { groundUnits: groundUnitsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;