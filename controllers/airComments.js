const express = require('express');
const router = express.Router();
const { airComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    airComments.findAll()
        .then(function (airCommentsList) {
            res.render('airComments', { airComments: airCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    airComments.create({
        content: req.body.content,
    })
        .then(function (newAirComment) {
            newAirComment = newAirComment.toJSON();
            res.redirect('/airUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let airCommentIndex = Number(req.params.id);
    airComments.update({
        content: req.body.content,
    }, { where: { id: airCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/airUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let airCommentIndex = Number(req.params.id);
    airComments.destroy({ where: { id: airCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/airUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;