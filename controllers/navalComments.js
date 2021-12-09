const express = require('express');
const router = express.Router();
const { navalComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    navalComments.findAll()
        .then(function (navalCommentList) {
            res.render('navalComments', { navalComments: navalCommentList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    navalComments.create({
        content: req.body.content,
    })
        .then(function (newNavalComment) {
            newNavalComment = newNavalComment.toJSON();
            res.redirect('/navalUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let navalCommentIndex = Number(req.params.id);
    navalComments.update({
        content: req.body.content,
    }, { where: { id: navalCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/navalUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let navalCommentIndex = Number(req.params.id);
    navalComments.destroy({ where: { id: navalCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/navalUnits');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;