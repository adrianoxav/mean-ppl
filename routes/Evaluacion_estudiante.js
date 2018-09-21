var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Evaluacion_estudiante = require('../models/Evaluacion_estudiante.js');

/* GET ALL Evaluacion-estudianteS */
router.get('/', function(req, res, next) {
  Evaluacion_estudiante.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET Evaluacion-estudianteSpeer */
router.get('/finalizados/:idUser', function(req, res, next) {

  Evaluacion_estudiante.find({idEstudiante:req.params.idUser, finalizo:false}).populate('idEstudiante').populate('idEvaluacionGrupo').populate('idEvaluacion').populate('idCurso').exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/poreval/:id', function(req, res, next) {

  Evaluacion_estudiante.find({idEvaluacion:req.params.id}).populate('idEstudiante').populate('idGrupo').populate('idEvaluacionGrupo').populate('idEvaluacion').populate('idCurso').exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Evaluacion-estudiante BY ID */
router.get('/:id', function(req, res, next) {
  Evaluacion_estudiante.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE Evaluacion-estudiante BY ID with populate*/
router.get('/getdetail/:id', function(req, res, next) {
  Evaluacion_estudiante.findById(req.params.id).populate('idEstudiante').populate('idGrupo').populate('idEvaluacionGrupo').populate('idEvaluacion').populate('idCurso').exec(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Evaluacion-estudiante */
router.post('/', function(req, res, next) {
  Evaluacion_estudiante.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Evaluacion-estudiante */
router.put('/:id', function(req, res, next) {
  Evaluacion_estudiante.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
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
