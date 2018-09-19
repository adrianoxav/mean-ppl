var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Evaluacion = require('../models/Evaluacion.js');
var Evaluacion_grupo = require('../models/Evaluacion_grupo.js');
var Evaluacion_estudiantepeer = require('../models/Evaluacion_estudiantepeer.js');
var Evaluacion_estudiante = require('../models/Evaluacion_estudiante.js');
/* GET ALL Evaluacion-estudianteS */
router.get('/', function(req, res, next) {
  Evaluacion_estudiantepeer.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET Evaluacion-estudianteSpeer */
router.get('/pendientes/:idUser', function(req, res, next) {

  Evaluacion_estudiantepeer.find({idEstudiante:req.params.idUser, finalizo:false})
  .populate('idEstudiante') .populate('idEstudianteEvaluar').populate('idEvaluacionGrupo').populate('idEvaluacion').populate('idCurso')
  .exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Evaluacion-estudiante BY ID */
router.get('/:id', function(req, res, next) {
  Evaluacion_estudiantepeer.findById(req.params.id)
  .populate('idEstudiante') .populate('idEstudianteEvaluar').populate('idEvaluacionGrupo').populate('idEvaluacion').populate('idCurso')
.exec( function (err, post) {
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

/* UPDATE Evaluacion-estudiante Peer */
router.put('/peer/:id', function(req, res, next) {
  Evaluacion_estudiantepeer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    var evaluacion_estudiantepeer=(post);
    console.log(post);
    //let wfsumar=post.wfestudianteevaluar;
    //console.log(wfsumar);

    Evaluacion_grupo.findByIdAndUpdate(req.body.idEvaluacionGrupo,

      { $inc: { hanrealizado: 1, wfgrupo: req.body.wfestudianteevaluar } }


      , function (err, post) {
      console.log(post);
      Evaluacion_estudiante.findOneAndUpdate({$and:

      [{idEvaluacionGrupo: req.body.idEvaluacionGrupo},{idEstudiante:req.body.idEstudianteEvaluar}]},


      { $inc: { hanrealizado: 1, wfestudiante:  req.body.wfestudianteevaluar  } }
      ,
    //  {$push: {"comentarios": req.body.comentarios}},


      {safe: true, upsert: true}

        , function (err, post) {
          console.log("esta debe ser la eval estudiante XD");

        console.log(post);

      });
    });
  });
  res.json(evaluacion_estudiantepeer);

});


/* DELETE Evaluacion-estudiante */
router.delete('/:id', function(req, res, next) {
  Evaluacion_estudiantepeer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
