var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grupo = require('../models/Grupo.js');

/* GET ALL CursoS */
router.get('/', function(req, res, next) {
  Grupo.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Curso BY ID */
router.get('/:id', function(req, res, next) {
  Grupo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/getgrupobynumcurso/:nombre/:curso', function(req, res, next) {
console.log(req.params.nombre);
console.log(req.params.curso);
  Grupo.findOne({nombre: req.params.nombre, curso:req.body.curso}, function (err, post) {
    if (err) return next(err);
    console.log(post);
    res.json(post);
  });
});

/* SAVE Curso */
router.post('/', function(req, res, next) {
  console.log(req.body);
  Grupo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Curso */
router.put('/:id', function(req, res, next) {
  Grupo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Curso */
router.delete('/:id', function(req, res, next) {
  Grupo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
