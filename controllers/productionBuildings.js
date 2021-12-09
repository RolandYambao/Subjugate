const express = require('express');
const router = express.Router();
const { productionBuildings } = require("../models");
const { productionComments } = require("../models");

// Get Route
router.get('/', function (req, res) {
    productionBuildings.findAll()
        .then(function (productionBuildingsList) {
            productionComments.findAll()
                .then(function (productionCommentsList) {
                    res.render('productionBuildings/index', { productionBuildings: productionBuildingsList, productionComments: productionCommentsList });
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