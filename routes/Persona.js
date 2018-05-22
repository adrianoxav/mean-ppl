var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Persona = require('../models/Persona.js');

/* GET ALL PersonaS */
router.get('/', function(req, res, next) {
  Persona.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Persona BY ID */
router.get('/:id', function(req, res, next) {
  Persona.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Persona */
router.post('/', function(req, res, next) {
  Persona.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Persona */
router.put('/:id', function(req, res, next) {
  Persona.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Persona */
router.delete('/:id', function(req, res, next) {
  Persona.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
