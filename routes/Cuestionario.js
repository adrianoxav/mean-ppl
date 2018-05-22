var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cuestionario = require('../models/Cuestionario.js');

/* GET ALL CuestionarioS */
router.get('/', function(req, res, next) {
  Cuestionario.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Cuestionario BY ID */
router.get('/:id', function(req, res, next) {
  Cuestionario.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Cuestionario */
router.post('/', function(req, res, next) {
  Cuestionario.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Cuestionario */
router.put('/:id', function(req, res, next) {
  Cuestionario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Cuestionario */
router.delete('/:id', function(req, res, next) {
  Cuestionario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
