const express = require('express');
const router = express.Router();
const { statusComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    statusComments.findAll()
        .then(function (statusCommentsList) {
            res.render('statusComments', { statusComments: statusCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    statusComments.create({
        content: req.body.content,
    })
        .then(function (newStatusComments) {
            newStatusComments = newStatusComments.toJSON();
            res.redirect('/statusPowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let statusCommentIndex = Number(req.params.id);
    statusComments.update({
        content: req.body.content,
    }, { where: { id: statusCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/statusPowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let statusCommentIndex = Number(req.params.id);
    statusComments.destroy({ where: { id: statusCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/statusPowers#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});


module.exports = router;