var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Estudiante = require("../models/Estudiante");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
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
      res.json(post);
    });
  }
});
//Create router for login or sign-in.


router.post('/register', function(req, res) {
  if (!req.body.email || !req.body.identificacion) {
    res.json({success: false, msg: 'Please pass email and password.'});
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.identificacion,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      tipo: req.body.tipo,
      identificacion: req.body.identificacion
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