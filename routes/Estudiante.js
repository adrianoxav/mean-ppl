var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Estudiante = mongoose.model('Estudiante');
var passport = require('passport');
var jwt = require('jsonwebtoken');
require('../config/passport')(passport);



/* GET ALL EstudianteS */
router.get('/', function(req, res, next) {
  Estudiante.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});



/* GET SINGLE Estudiante BY ID */
router.get('/:id', function(req, res, next) {
  Estudiante.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE Estudiante BY email */
router.get('/email/:email', function(req, res, next) {
  Estudiante.findOne({
    email: req.params.email
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Estudiante */
router.post('/', function(req, res, next) {
  Estudiante.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Estudiante */
router.put('/:id', function(req, res, next) {
  Estudiante.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Estudiante */
router.delete('/:id', function(req, res, next) {
  Estudiante.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

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
module.exports = router;
