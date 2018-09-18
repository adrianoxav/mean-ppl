var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var Evaluacion_estudianteSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  'idPersona': {
type: String,
ref: 'Persona'
},
'idEvaluacion': {
type: String,
ref: 'Evaluacion'
},
'idGrupo': {
type: String,
ref: 'Evaluacion'
},
finalizo: Boolean,
fechaInicioTomada: Date,
fechaTerminada: Date,
wfestudiante: Number,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Evaluacion_estudiante', Evaluacion_estudianteSchema);
