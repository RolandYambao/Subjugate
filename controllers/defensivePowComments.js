const express = require('express');
const router = express.Router();
const { defensivePowComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    defensivePowComments.findAll()
        .then(function (defensivePowCommentsList) {
            res.render('defensivePowComments', { defensivePowComments: defensivePowCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    defensivePowComments.create({
        content: req.body.content,
    })
        .then(function (newDefensivePowComment) {
            newDefensivePowComment = newDefensivePowComment.toJSON();
            res.redirect('/defensivePowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let defensivePowCommentIndex = Number(req.params.id);
    defensivePowComments.update({
        content: req.body.content,
    }, { where: { id: defensivePowCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/defensivePowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let defensivePowCommentIndex = Number(req.params.id);
    defensivePowComments.destroy({ where: { id: defensivePowCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/defensivePowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;