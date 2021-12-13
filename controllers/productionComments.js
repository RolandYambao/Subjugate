const express = require('express');
const router = express.Router();
const { productionComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    productionComments.findAll()
        .then(function (productionCommentsList) {
            res.render('productionComments', { productionComments: productionCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// Post Routes
router.post('/', function (req, res) {
    productionComments.create({
        content: req.body.content,
    })
        .then(function (newProductionComments) {
            newProductionComments = newProductionComments.toJSON();
            res.redirect('/productionBuildings#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not added, please try again' });
        });
});

// Edit
router.put('/:id', function (req, res) {
    let productionCommentIndex = Number(req.params.id);
    productionComments.update({
        content: req.body.content,
    }, { where: { id: productionCommentIndex } })
        .then(function (response) {
            console.log('AFTER UPDATE', response);
            res.redirect('/productionBuildings#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Update was not successful. Please try again.' });
        });
});

// Delete
router.delete('/:id', function (req, res) {
    let productionCommentIndex = Number(req.params.id);
    productionComments.destroy({ where: { id: productionCommentIndex } })
        .then(function (response) {
            console.log('COMMENT DELETED', response);
            res.redirect('/productionBuildings#comment');
        })
        .catch(function (error) {
            console.log('ERROR', error);
            res.render('404', { message: 'Comment was not deleted, please try again....' });
        });
});

module.exports = router;