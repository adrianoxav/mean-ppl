var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Estudiante = require('../models/Estudiante.js');
var Evaluacion = require('../models/Evaluacion.js');
var Evaluacion_grupo = require('../models/Evaluacion_grupo.js');
var Evaluacion_estudiantepeer = require('../models/Evaluacion_estudiantepeer.js');
var Evaluacion_estudiante = require('../models/Evaluacion_estudiante.js');

var Curso = require('../models/Curso.js');
var Grupo = require('../models/Grupo.js');
var schedule = require('node-schedule');

/* GET ALL EvaluacionS */
router.get('/', function(req, res, next) {
  Evaluacion.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET ALL EvaluacionS */
router.get('/getporprofesor/', function(req, res, next) {

  Evaluacion.find().populate('idCurso').exec(function (err, products) {
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
            finalizo:0,

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
              for (var k = 0; k < grupo.estudiantes.length; k++) {
                var newEvaluacionEstudiante = new Evaluacion_estudiante({
                  idEstudiante: grupo.estudiantes[k],
                  idEvaluacion: eval._id,
                  idEvaluacionGrupo: evaluaciongrupo._id,
                  idCurso: grupo.curso,
                  idGrupo:grupo._id,
                  tipo: eval.tipo,
                  fechaInicioTomada: eval.fechaInicioTomada,
                  fechaTerminada: eval.fechaTerminada,
                  wfestudiante: 0,
                  hanrealizado:0,
                  finalizo:0,
                  evaluaste:0,
                  comentarios: [],
                });

                newEvaluacionEstudiante.save(function(err,post) {
                  if (err) {
                    return res.json({success: false, msg: 'error'});
                  }
                //  res.json(post);
                  var evaluacionestudiante=(post);

                  });
                }

              for (var i = 0; i < grupo.estudiantes.length; i++) {
                //assessmentestudiante
                  for (var j = 0; j < grupo.estudiantes.length; j++) {

                      if(j!=i){
                        var newEvaluacionEstudiantePeer = new Evaluacion_estudiantepeer({
                          idEstudiante: grupo.estudiantes[i],
                          idEstudianteEvaluar: grupo.estudiantes[j],
                        //  idEvaluacionEstudiante: evaluacionestudiante._id,
                          idEvaluacionGrupo: evaluaciongrupo._id,
                          idEvaluacion: eval._id,
                          idGrupo:grupo._id,
                          idCurso: grupo.curso,
                          tipo: eval.tipo,
                          fechaInicioTomada: eval.fechaInicioTomada,
                          fechaTerminada: eval.fechaTerminada,
                          wfestudianteevaluar: 0,
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

        //    else{}              ojo que esto va cuando esten hechos los demas assessments
          });
        });

      }//end del for

    });

    ///FUNCION QUE REALIZA EL TASK DE CERRAR LOS ASSESSMENTS
    var date = new Date(req.body.fechaTerminada);

    var j = schedule.scheduleJob(date, function(){
      console.log('The world is going to end today.');
      Evaluacion.findByIdAndUpdate(eval.id,{finalizo:true}, function (err, post) {

        var evalu=post;
        //Cierro las evaluaciones por estudiante
        Evaluacion_estudiantepeer.updateMany({idEvaluacion: evalu._id},{finalizo:true}, function (err, post) {


          if (err) return next(err);
          var evalupeer=(post);

        });
        if(evalu.tipo=="Peer"){

        Evaluacion_grupo.find({idEvaluacion: evalu._id},function (err, post) {
          if (err) return next(err);
          var evalgrupos=(post);
          for (let evalgrupo of evalgrupos){ //recorro los grupos
            if(evalgrupo.hanrealizado==0){
              evalgrupo.wfgrupo=0}
              else{
                evalgrupo.wfgrupo=(evalgrupo.wfgrupo/evalgrupo.hanrealizado);
              }
              evalgrupo.finalizo=true;
              Evaluacion_grupo.findByIdAndUpdate(evalgrupo._id,evalgrupo, function (err, post) {
                if (err) return next(err);
                var evalgrupoact=(post);
                Evaluacion_estudiante.find({idEvaluacionGrupo: evalgrupoact._id},function (err, post) {//traigo al fin a los estudiantes
                  if (err) return next(err);

                    var evalestudiantes=post;
                    for (let evalestudiante of evalestudiantes){ //recorro los eval estudiantes donde va la nota final
                      if(evalestudiante.haevaluado==false){
                        evalestudiante.wfestudiante=0}
                        else if(evalestudiante.haevaluado==true && evalestudiante.hanrealizado==0){
                            evalestudiante.wfestudiante=evalgrupo.wfgrupo;
                        }
                        else{
                          let prome=(evalestudiante.wfestudiante/evalestudiante.hanrealizado);
                          console.log("OJOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
                          console.log(evalestudiante);
                          console.log(prome);
                          console.log(evalgrupo.wfgrupo);
                          evalestudiante.wfestudiante=Math.sqrt(prome/evalgrupo.wfgrupo);
                        }
                        evalestudiante.finalizo=true;
                        //guardo la evaluacion estudiante
                        Evaluacion_estudiante.findByIdAndUpdate(evalestudiante._id,evalestudiante, function (err, post) {
                          if (err) return next(err);
                        });

                      }
                  });
                });
          }

          console.log("cerrado el proceso");
        });


        if (err) return next(err);
        var evalu=(post);


      }


////////////////      else{} //para cuando haya mas assessments
      });


      //fin del task
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
