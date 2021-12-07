const express = require('express');
const router = express.Router();
const { Faction } = require("../models");

// Get Route
router.get('/', function (req, res) {
    Faction.findAll()
        .then(function (factionList) {
            res.render('factions/index', { factions: factionList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Route
router.get('/', function (req, res) {
    Faction.create({
        firstFaction: req.body.firstFaction,
        secondFaction: req.body.secondFaction,
        thirdFaction: req.body.thirdFaction,
    })
        .then(function (newFaction) {
            newFaction = newFaction.toJSON();
            res.redirect('/artists/ ' + newArtist.id);
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Artist was not added, please try again' });
        });
    // res.redirect()
});

// Post Route

module.exports = router;