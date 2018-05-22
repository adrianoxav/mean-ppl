var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Assessment = require('../models/Assessment.js');

/* GET ALL AssessmentS */
router.get('/', function(req, res, next) {
  Assessment.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Assessment BY ID */
router.get('/:id', function(req, res, next) {
  Assessment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Assessment */
router.post('/', function(req, res, next) {
  Assessment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Assessment */
router.put('/:id', function(req, res, next) {
  Assessment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Assessment */
router.delete('/:id', function(req, res, next) {
  Assessment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
