var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Assignation = require('../models/Assignation.js');

/* GET ALL AssignationS */
router.get('/', function(req, res, next) {
  Assignation.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Assignation BY ID */
router.get('/:id', function(req, res, next) {
  Assignation.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Assignation */
router.post('/', function(req, res, next) {
  Assignation.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Assignation */
router.put('/:id', function(req, res, next) {
  Assignation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Assignation */
router.delete('/:id', function(req, res, next) {
  Assignation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
