const express = require('express');
const router = express.Router();
const { groundComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    groundComments.findAll()
        .then(function (groundCommentsList) {
            res.render('groundComments', { groundComments: groundCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    groundComments.create({
        content: req.body.content,
    })
        .then(function (newGroundComment) {
            newGroundComment = newGroundComment.toJSON();
            res.redirect('/groundUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let groundCommentIndex = Number(req.params.id);
    groundComments.update({
        content: req.body.content,
    }, { where: { id: groundCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/groundUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let groundCommentIndex = Number(req.params.id);
    groundComments.destroy({ where: { id: groundCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/groundUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;