var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Evaluacion = require('../models/Evaluacion.js');

/* GET ALL EvaluacionS */
router.get('/', function(req, res, next) {
  Evaluacion.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Evaluacion BY ID */
router.get('/:id', function(req, res, next) {
  Evaluacion.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Evaluacion */
router.post('/', function(req, res, next) {
  Evaluacion.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Evaluacion */
router.put('/:id', function(req, res, next) {
  Evaluacion.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Evaluacion */
router.delete('/:id', function(req, res, next) {
  Evaluacion.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
