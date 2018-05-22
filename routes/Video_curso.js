var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Video_curso = require('../models/Video_curso.js');

/* GET ALL Video-cursoS */
router.get('/', function(req, res, next) {
  Video_curso.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Video-curso BY ID */
router.get('/:id', function(req, res, next) {
  Video_curso.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Video-curso */
router.post('/', function(req, res, next) {
  Video_curso.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Video-curso */
router.put('/:id', function(req, res, next) {
  Video_curso.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Video-curso */
router.delete('/:id', function(req, res, next) {
  Video_curso.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
