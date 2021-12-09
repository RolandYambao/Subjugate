const express = require('express');
const router = express.Router();
const { groundUnits } = require("../models");
const { groundComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    groundUnits.findAll()
        .then(function (groundUnitsList) {
            groundComments.findAll()
                .then(function (groundCommentsList) {
                    res.render('groundUnits/index', { groundUnits: groundUnitsList, groundComments: groundCommentsList });
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