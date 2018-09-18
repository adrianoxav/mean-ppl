var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Estudiante = require('../models/Estudiante.js');
var Evaluacion = require('../models/Evaluacion.js');
var Evaluacion_grupo = require('../models/Evaluacion_grupo.js');
var Evaluacion_estudiantepeer = require('../models/Evaluacion_estudiantepeer.js');
var Curso = require('../models/Curso.js');
var Grupo = require('../models/Grupo.js');

/* GET ALL EvaluacionS */
router.get('/', function(req, res, next) {
  Evaluacion.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Evaluacion BY ID */
router.get('/:id', function(req, res, next) {
  Evaluacion.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Evaluacion */
router.post('/', function(req, res, next) {
  Evaluacion.create(req.body, function (err, post) {
    if (err) return next(err);
    var eval=(post);
    console.log(post);
    Curso.findById(eval.idCurso, function (err, post) {
      if (err) return next(err);
      var curso=(post);
      console.log(post);
      for (var i = 0; i < curso.grupos.length; i++) {
          var grupo = curso.grupos[i];

        Grupo.findById(grupo, function (err, post) {
          if (err) return next(err);
          var grupo=(post);
          console.log(post);


          var newEvaluacionGrupo = new Evaluacion_grupo({
            idCurso: grupo.curso,
            idGrupo:grupo._id,
            idEvaluacion: eval._id,
            tipo: eval.tipo,
            fechaInicioTomada: eval.fechaInicioTomada,
            fechaTerminada: eval.fechaTerminada,
            wfgrupo: 0,
            hanrealizado:0,
            numestudiantes: grupo.estudiantes.length,
          });
          newEvaluacionGrupo.save(function(err,post) {
            if (err) {
              return res.json({success: false, msg: 'error'});
            }
          //  res.json(post);
            var evaluaciongrupo=(post);

//Empezamos a verificar los tipos de Assessments
            if(evaluaciongrupo.tipo=="Peer"){
              for (var i = 0; i < grupo.estudiantes.length; i++) {
                  var estudiante = grupo.estudiantes[i];
                  for (var j = 0; j < grupo.estudiantes.length; j++) {
                    var nuevoestudiante=grupo.estudiantes[j];
                      if(j!=i){
                        var newEvaluacionEstudiantePeer = new Evaluacion_estudiantepeer({
                          idEstudiante: estudiante,
                          idEstudianteEvaluar: nuevoestudiante,
                          idEvaluacion: eval._id,
                          idCurso: grupo.curso,
                          tipo: eval.tipo,
                          fechaInicioTomada: eval.fechaInicioTomada,
                          fechaTerminada: eval.fechaTerminada,
                          wfestudiante: 0,
                          finalizo:0,
                          comentarios: [],
                        });
                        newEvaluacionEstudiantePeer.save(function(err,post) {
                          if (err) {
                            return res.json({success: false, msg: 'error'});
                          }
                        //  res.json(post);
                          console.log(post);
                            });
                      }
                  }

                }

              //  res.json(post);



            }
          });
        });

      }//end del for

    });

    // save the user
res.json(eval);
  });
});

/* UPDATE Evaluacion */
router.put('/:id', function(req, res, next) {
  Evaluacion.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Evaluacion */
router.delete('/:id', function(req, res, next) {
  Evaluacion.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
