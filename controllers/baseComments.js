const express = require('express');
const router = express.Router();
const { baseComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    baseComments.findAll()
        .then(function (baseCommentsList) {
            res.render('baseComments', { baseComments: baseCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    baseComments.create({
        content: req.body.content,
    })
        .then(function (newBaseComment) {
            newBaseComment = newBaseComment.toJSON();
            res.redirect('/baseBuildings');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let baseCommentIndex = Number(req.params.id);
    baseComments.update({
        content: req.body.content,
    }, { where: { id: baseCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/baseBuildings');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let baseCommentIndex = Number(req.params.id);
    baseComments.destroy({ where: { id: baseCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/baseBuildings');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;