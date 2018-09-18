var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var CuestionarioSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
  },

  preguntas:[ {
    type: String,
    ref: 'Pregunta'
  }],
nombre: String,
creado: Date,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cuestionario', CuestionarioSchema);
