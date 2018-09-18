var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Evaluacion_estudiantepeer = require('../models/Evaluacion_estudiantepeer.js');

/* GET ALL Evaluacion-estudianteS */
router.get('/', function(req, res, next) {
  Evaluacion_estudiantepeer.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET Evaluacion-estudianteSpeer */
router.get('/pendientes/:idUser', function(req, res, next) {

  Evaluacion_estudiantepeer.find({idEstudiante:req.params.idUser, finalizo:false}).populate('idEstudiante').populate('idEstudianteEvaluar').populate('idEvaluacion').populate('idCurso').exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Evaluacion-estudiante BY ID */
router.get('/:id', function(req, res, next) {
  Evaluacion_estudiantepeer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Evaluacion-estudiante */
router.post('/', function(req, res, next) {
  Evaluacion_estudiantepeer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Evaluacion-estudiante */
router.put('/:id', function(req, res, next) {
  Evaluacion_estudiantepeer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Evaluacion-estudiante */
router.delete('/:id', function(req, res, next) {
  Evaluacion_estudiante.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
