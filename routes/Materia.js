var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Materia = require('../models/Materia.js');

/* GET ALL CateriaS */
router.get('/', function(req, res, next) {
  Materia.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


router.get('/getporcurso/:idMateria', function(req, res, next) {
  Materia.findById(req.params.idMateria,function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Cateria BY ID */
router.get('/:id', function(req, res, next) {
  Materia.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Cateria */
router.post('/', function(req, res, next) {
  console.log(req.body);
  Materia.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Cateria */
router.put('/:id', function(req, res, next) {
  Materia.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Cateria */
router.delete('/:id', function(req, res, next) {
  Materia.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
