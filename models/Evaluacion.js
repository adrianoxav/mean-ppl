var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var EvaluacionSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
'idCurso': {
type: String,
ref: 'Curso'
},
 'idCuestionario': {
   type: String,
  ref: 'Cuestionario'
  },
  numero: Number,
  tipo: String,
  capitulo: Number,
  fechaInicioTomada: Date,
  fechaTerminada: Date,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Evaluacion', EvaluacionSchema);
