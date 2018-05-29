var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EvaluacionSchema = new mongoose.Schema({
'idCurso': {
 type: Schema.Types.ObjectId,
 ref: 'Curso'
 },
 'idCuestionario': {
  type: Schema.Types.ObjectId,
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
