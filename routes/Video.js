var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Video = require('../models/Video.js');

/* GET ALL VideoS */
router.get('/', function(req, res, next) {
  Video.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Video BY ID */
router.get('/:id', function(req, res, next) {
  Video.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Video */
router.post('/', function(req, res, next) {
  Video.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Video */
router.put('/:id', function(req, res, next) {
  Video.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Video */
router.delete('/:id', function(req, res, next) {
  Video.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
