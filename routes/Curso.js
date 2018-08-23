var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Curso = require('../models/Curso.js');
var respuesta = require('../utils/responses');

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
  console.log(req.body);
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
router.put('/:id', function(req, res, next) {
  Curso.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



//router.post('/anadirProfesoraCurso', anadirProfesoraCurso)

// estudiantes
//router.post('/anadirEstudianteaCurso', anadirEstudianteaCurso);


router.put('/anadirProfesoraCurso', function(req, res, next) {
  console.log(req);
  Curso.findByIdAndUpdate({_id: req.body.idcurso})

      .exec( function(err, Curso) {



        Curso.profesores.push(req.body.idUser);


});
});


/* DELETE Curso */
router.delete('/:id', function(req, res, next) {
  Curso.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET estudiante Curso BY ID */
router.get('/obtenerCursoEstudiante/:idUser', function(req, res, next) {
  Curso.findOne({estudiantes: req.params.idUser}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
