const express = require('express');
const router = express.Router();
const { navalUnits } = require("../models");
const { navalComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    navalUnits.findAll()
        .then(function (navalUnitsList) {
            navalComments.findAll()
                .then(function (navalCommentsList) {
                    res.render('navalUnits/index', { navalUnits: navalUnitsList, navalComments: navalCommentsList });
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