const express = require('express');
const router = express.Router();
const { productionBuildings } = require("../models");

// Get Route
router.get('/', function (req, res) {
    productionBuildings.findAll()
        .then(function (productionBuildingsList) {
            res.render('productionBuildings/index', { productionBuildings: productionBuildingsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

module.exports = router;