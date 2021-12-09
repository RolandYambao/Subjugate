const express = require('express');
const router = express.Router();
const { defensiveBuildings } = require("../models");
const { defensiveBuildComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    defensiveBuildings.findAll()
        .then(function (defensiveBuildingsList) {
            defensiveBuildComments.findAll()
                .then(function (defensiveBuildCommentsList) {
                    res.render('defensiveBuildings/index', { defensiveBuildings: defensiveBuildingsList, defensiveBuildComments: defensiveBuildCommentsList });
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