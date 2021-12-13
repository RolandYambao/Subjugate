const express = require('express');
const router = express.Router();
const { offensiveComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    offensiveComments.findAll()
        .then(function (offensiveCommentList) {
            res.render('offensiveComments', { offensiveComments: offensiveCommentList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    offensiveComments.create({
        content: req.body.content,
    })
        .then(function (newOffensiveComments) {
            newOffensiveComments = newOffensiveComments.toJSON();
            res.redirect('/offensivePowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let offensiveCommentIndex = Number(req.params.id);
    offensiveComments.update({
        content: req.body.content,
    }, { where: { id: offensiveCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/offensivePowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let offensiveCommentIndex = Number(req.params.id);
    offensiveComments.destroy({ where: { id: offensiveCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/offensivePowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;