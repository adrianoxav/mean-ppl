var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Evaluacion_estudianteSchema = new mongoose.Schema({
  'idPersona': {
type: Schema.Types.ObjectId,
ref: 'Persona'
},
'idEvaluacion': {
type: Schema.Types.ObjectId,
ref: 'Evaluacion'
},
finalizo: Boolean,
fechaTerminada: Date,
wf: Number,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Evaluacion_estudiante', Evaluacion_estudianteSchema);
