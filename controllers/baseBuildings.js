const express = require('express');
const router = express.Router();
const { baseBuildings } = require("../models");
const { baseComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    baseBuildings.findAll()
        .then(function (baseBuildingsList) {
            baseComments.findAll()
                .then(function (baseCommentsList) {
                    res.render('baseBuildings/index', { baseBuildings: baseBuildingsList, baseComments: baseCommentsList });
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