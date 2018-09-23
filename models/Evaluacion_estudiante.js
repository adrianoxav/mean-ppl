var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var Evaluacion_estudianteSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  'idEstudiante': {
type: String,
ref: 'Estudiante'
},
'idEvaluacion': {
type: String,
ref: 'Evaluacion'
},
'idCurso': {
type: String,
ref: 'Curso'
},
'idGrupo': {
type: String,
ref: 'Grupo'
},
'idEvaluacionGrupo': {
type: String,
ref: 'Evaluacion_grupo'
},
finalizo: {
type: Boolean,
'default': false
},
evaluaste:Number,
haevaluado: {
type: Boolean,
'default': false
},
fechaInicioTomada: Date,
fechaTerminada: Date,
wfestudiante: Number,
tipo: String,
hanrealizado:Number,
comentarios:[{type:String}],
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Evaluacion_estudiante', Evaluacion_estudianteSchema);
