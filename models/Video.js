var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');


var VideoSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  tema: String,
  descripcion: String,
  modulo: String,
  img_url: String,
  url: String,
  'idMateria': {
  type: String,
  ref: 'Materia'
  },

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', VideoSchema);
