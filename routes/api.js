var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/User");
var Estudiante = require("../models/Estudiante");
var bcrypt = require('bcrypt-nodejs');
var Curso = require('../models/Curso.js');
var Grupo = require('../models/Grupo.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

router.post('/resetPassword',function(req, res) {
  User.findOne({
    email: req.body.email,identificacion:req.body.identificacion
  }, function (err, post) {
    if (post==null){}
    else {

  //var resetToken = req.headers['reset-token'];
    var secret = config.secretReset || 'ppl';

    // Desencriptar el token
//    jwt.verify(resetToken, secret, {ignoreExpiration:true}, function(err, decoded) {
    //
      //console.log(decoded)
      var idUser = post._id;
      var newPassword = req.body.password;

      var _salt = config.saltfactorForBycript;
      bcrypt.genSalt( _salt , function(err, salt) {
        if (err) return res.status(500).json({error: 'Error al intentar cambiar la clave'});

        bcrypt.hash(newPassword, salt, null, function(err, hash) {
          if (err) return res.status(500).json({error: 'Error al intentar cambiar la clave'});

          var _set = { password: hash }
          User.findByIdAndUpdate( idUser, {$set:_set}, function (err, user) {
            if (err) return res.status(500).json({error: 'Error al intentar cambiar la clave'});
            return res.status(200).json({message: 'Se ha realizado el cambio de clave de la cuenta'});
          });

        }); /* Hash */
      });/* Salt */
  //  }); /* Verify */
}
  });
  });

router.post('/resetPasswordEstudiante',function(req, res) {
  console.log(req.body);
  Estudiante.findOne({
    email: req.body.email,identificacion:req.body.identificacion
  }, function (err, post) {
    if (post==null){}
    else {


    //return res.status(404).json({error: 'No existe una cuenta de Estudiante con ese correo'});

    console.log(post);
  //var resetToken = req.headers['reset-token'];
    var secret = config.secretReset || 'ppl';

    // Desencriptar el token
//    jwt.verify(resetToken, secret, {ignoreExpiration:true}, function(err, decoded) {
    //
      //console.log(decoded)
      var idUser = post._id;
      var newPassword = req.body.password;

      var _salt = config.saltfactorForBycript;
      bcrypt.genSalt( _salt , function(err, salt) {
        if (err) return res.status(500).json({error: 'Error al intentar cambiar la clave'});

        bcrypt.hash(newPassword, salt, null, function(err, hash) {
          if (err) return res.status(500).json({error: 'Error al intentar cambiar la clave'});

          var _set = { password: hash }
          Estudiante.findByIdAndUpdate( idUser, {$set:_set}, function (err, user) {
            if (err) return res.status(500).json({error: 'Error al intentar cambiar la clave'});
            return res.status(200).json({message: 'Se ha realizado el cambio de clave de la cuenta'});
          });

        }); /* Hash */
      });/* Salt */
  //  }); /* Verify */
    }
  });

  });


router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass email and password.'});
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      identificacion: req.body.identificacion,
      tipo: req.body.tipo,
      curso: req.body.curso

    });
    // save the user
    newUser.save(function(err,post) {
      if (err) {
        return res.json({success: false, msg: 'email already exists.'});
      }
      res.json(post);
    });
  }
});
router.post('/suestudiante', function(req, res) {
  console.log(req.body);
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass email and password.'});
  } else {
    var newEstudiante = new Estudiante({
      email: req.body.email,
      password: req.body.password,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      identificacion: req.body.identificacion,
      tipo: req.body.tipo,
      curso: req.body.curso


    });
    // save the user
    newEstudiante.save(function(err,post) {
      if (err) {
        console.log(err);
        return res.json({success: false, msg: 'email already exists. in estudiantes'});
      }
      var estu=post;
      for (let curso of req.body.curso){
        console.log(curso);
          Curso.findByIdAndUpdate(curso, {$push: { estudiantes:  post._id}
                    }
       ,
      //  {$push: {"comentarios": req.body.comentarios}},


        {safe: true, upsert: true}, function (err, post) {
            if (err)         console.log(err);

            console.log("POST AL CURSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");

            console.log(post);
          });

      }
      res.json(post);
    });
  }
});
//Create router for login or sign-in.












router.post('/register/', function(req, res) {
  console.log(req.body[0]);
  console.log(req.body[1]);
  let cursos=[ ];
  let lista=[ ];
  cursos=req.body[0];
  lista=req.body[1];

  for (l of lista)
  {
    console.log(l);
      var newEstudiante = new Estudiante({
        email: l.email,
        password: l.identificacion,
        nombres: l.nombres,
        apellidos: l.apellidos,
        identificacion: l.identificacion,
        tipo: l.tipo,
        curso: cursos,
        grupo:l.grupo


      });
      // save the user
      newEstudiante.save(function(err,post) {
        console.log("GRUPO ACTUUUUUUUUUUUALLLLLLLLLLLLLLLLLLLLLLLL");
        var grupoact=l.grupo;

        console.log(err);
        var estudiante=post;
            if (post==null){}
            else {
              var newest= post._id;
              console.log("IMPRIMO AL ESTUDIANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE ACTUALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
              console.log(estudiante);
              for (let curso of cursos){
                var grupotraido;

                console.log(curso);
                  Curso.findByIdAndUpdate(curso, {$push: { estudiantes:  post._id}
                            }
               ,
              //  {$push: {"comentarios": req.body.comentarios}},


                {safe: true, upsert: true}, function (err, post) {
                    if (err)         console.log(err);

                    console.log("POST AL CURSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");

                    console.log(post);
                    var cursoact= post;


                      Grupo.findOneAndUpdate({nombre: estudiante.grupo, curso:cursoact._id}, {$push: { estudiantes:  newest}
                                }
                   ,
             function (err, post) {
                        if (err)         console.log(err);
                        console.log("ACTUALIZA EL GRUPOOOOOOOOOOOO YAAAAAAAAAAAAAAAAAAAAAAA");
                        console.log(post);


  });
                    });


              }
        }


        //res.json(post);
      });



  }

});



















router.put('/aniadiracurso/:id', function(req, res) {
  console.log(req.params);
  console.log(req.body);

  Estudiante.findByIdAndUpdate(req.params.id, {$push: { curso:  req.body._id}
            }
,
//  {$push: {"comentarios": req.body.comentarios}},


{safe: true, upsert: true}, function (err, post) {
    if (err)         console.log(err);

    console.log("POST AL CURSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");

    console.log(post);
  });

  });

  router.put('/aniadiraestudiante/:id', function(req, res) {
    console.log(req.params);
    console.log(req.body);


          Curso.findByIdAndUpdate(req.params._id, {$push: { estudiantes:  req.body._id}
                    }
       ,
      //  {$push: {"comentarios": req.body.comentarios}},


        {safe: true, upsert: true}, function (err, post) {
            if (err)         console.log(err);

            console.log("POST AL CURSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");

            console.log(post);
          });
    });

router.post('/signin', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token, user: user});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});
//Create router for add new book that only accessible to authorized user.
router.post('/signinEstudiante', function(req, res) {
  Estudiante.findOne({
    email: req.body.email
  }, function(err, estudiante) {
    if (err) throw err;

    if (!estudiante) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      estudiante.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(estudiante.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token, user: estudiante});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});
//Create function for parse authorization token from request headers.

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
//Finally, export router as a module.

module.exports = router;
