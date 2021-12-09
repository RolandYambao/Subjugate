const express = require('express');
const router = express.Router();
const { navalUnits } = require("../models");

// Get Route
router.get('/', function (req, res) {
    navalUnits.findAll()
        .then(function (navalUnitsList) {
            res.render('navalUnits/index', { navalUnits: navalUnitsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;