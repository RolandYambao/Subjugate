const express = require('express');
const router = express.Router();
const { airComments } = require("../models");

// Get Routes
router.get('/', function (req, res) {
    airComments.findAll()
        .then(function (airCommentsList) {
            res.render('airComments/index', { airComments: airCommentsList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({ message: 'Error occured, please try again....' });
        });
});

// // Get to Edit Page
// router.get('/edit/:id', function (req, res) {
//     let airCommentIndex = Number(req.params.id);
//     airComments.findByPk(airCommentIndex)
//         .then(function (airComment) {
//             if (airComment) {
//                 airComment = airComment.toJSON();
//                 res.render('airComments/edit', { airComment: airComment });
//             } else {
//                 console.log('This Comment does not exist');
//                 // render a 404 page
//                 res.render('404', { message: 'Comment does not exist' });
//             }
//         })
//         .catch(function (error) {
//             console.log('ERROR', error);
//         });

// });
// router.get('/:id', function (req, res) {
//     console.log('PARAMS', req.params);
//     let airCommentIndex = Number(req.params.id);
//     console.log('IS THIS A NUMBER', airCommentIndex);
//     airComments.findByPk(airCommentIndex)
//         .then(function (airComment) {
//             if (airComment) {
//                 airComment = airComment.toJSON();
//                 console.log('IS THIS A COMMENT', airComment);
//                 res.render('airComments/show', { airComment: airComment });
//             } else {
//                 console.log('This comment does not exist');
//                 // render a 404 page
//                 res.render('404', { message: 'Comment does not exist' });
//             }
//         })
//         .catch(function (error) {
//             console.log('ERROR', error);
//         });
// });

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

// // Edit
// router.put('/:id', function (req, res) {
//     console.log('EDIT FORM DATA THAT WAS SUBMITTED', req.body);
//     console.log('HERE IS THE ID', req.params.id);
//     let airCommentIndex = Number(req.params.id);
//     airComments.update({
//         content: req.body.content,
//     }, { where: { id: airCommentIndex } })
//         .then(function (response) {
//             console.log('AFTER UPDATE', response);
//             res.redirect('/airComments/ ' + airCommentIndex);
//         })
//         .catch(function (error) {
//             console.log('ERROR', error);
//             res.render('404', { message: 'Update was not successful. Please try again.' });
//         });
// });

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