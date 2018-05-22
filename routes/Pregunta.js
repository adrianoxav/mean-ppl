var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pregunta = require('../models/Pregunta.js');

/* GET ALL PreguntaS */
router.get('/', function(req, res, next) {
  Pregunta.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Pregunta BY ID */
router.get('/:id', function(req, res, next) {
  Pregunta.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Pregunta */
router.post('/', function(req, res, next) {
  Pregunta.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Pregunta */
router.put('/:id', function(req, res, next) {
  Pregunta.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Pregunta */
router.delete('/:id', function(req, res, next) {
  Pregunta.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
