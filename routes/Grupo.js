var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grupo = require('../models/Grupo.js');
var Curso = require('../models/Curso.js');


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
  Grupo.findOne({nombre: req.params.nombre, curso:req.params.curso}, function (err, post) {
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
    //res.json(post);
    Curso.findByIdAndUpdate(req.body.curso, {$push: {grupos: post._id}}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
});


router.put('/limpiargruposcurso/:idcursoseleccionado', function(req, res, next) {
//  console.log(req);
  Grupo.findOne({curso: req.params.idcursoseleccionado})

      .exec( function(err, Grupo) {



        Grupo.estudiantes=[];


});
});

router.put('/actualizargrupos/', function(req, res, next) {
  Grupo.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
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
