const express = require('express');
const router = express.Router();
const { airUnits } = require("../models");
const { airComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    airUnits.findAll()
        .then(function (airUnitsList) {
            airComments.findAll()
                .then(function (airCommentsList) {
                    res.render('airUnits/index', { airUnits: airUnitsList, airComments: airCommentsList });
                })
                .catch(function (err) {
                    console.log('ERROR', err);
                    res.json({ message: 'Error occured, please try again....' });
                });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;