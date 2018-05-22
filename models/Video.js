var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VideoSchema = new mongoose.Schema({
  tema: String,
  descripcion: String,
  modulo: String,
  img_irl: String,
  url: String,

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', VideoSchema);
