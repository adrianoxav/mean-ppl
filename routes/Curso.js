var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Curso = require('../models/Curso.js');

/* GET ALL CursoS */
router.get('/', function(req, res, next) {
  Curso.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Curso BY ID */
router.get('/:id', function(req, res, next) {
  Curso.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Curso */
router.post('/', function(req, res, next) {
  Curso.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Curso */
router.put('/:id', function(req, res, next) {
  Curso.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Curso */
router.delete('/:id', function(req, res, next) {
  Curso.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
