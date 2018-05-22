var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CursoSchema = new mongoose.Schema({
  nombre: String,
  anio: String,
  termino: String,
  cod_materia: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Curso', CursoSchema);
