var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pregunta_assessment = require('../models/Pregunta_assessment.js');

/* GET ALL Pregunta-assessmentS */
router.get('/', function(req, res, next) {
  Pregunta_assessment.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Pregunta-assessment BY ID */
router.get('/:id', function(req, res, next) {
  Pregunta_assessment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Pregunta-assessment */
router.post('/', function(req, res, next) {
  Pregunta_assessment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Pregunta-assessment */
router.put('/:id', function(req, res, next) {
  Pregunta_assessment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Pregunta-assessment */
router.delete('/:id', function(req, res, next) {
  Pregunta_assessment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
