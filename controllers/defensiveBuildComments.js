const express = require('express');
const router = express.Router();
const { defensiveBuildComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    defensiveBuildComments.findAll()
        .then(function (defensiveBuildCommentsList) {
            res.render('defensiveBuildComments', { defensiveBuildComments: defensiveBuildCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    defensiveBuildComments.create({
        content: req.body.content,
    })
        .then(function (newDefensiveBuildComment) {
            newDefensiveBuildComment = newDefensiveBuildComment.toJSON();
            res.redirect('/defensiveBuildings#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let defensiveBuildCommentIndex = Number(req.params.id);
    defensiveBuildComments.update({
        content: req.body.content,
    }, { where: { id: defensiveBuildCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/defensiveBuildings#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let defensiveBuildCommentIndex = Number(req.params.id);
    defensiveBuildComments.destroy({ where: { id: defensiveBuildCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/defensiveBuildings#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;