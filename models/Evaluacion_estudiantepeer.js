var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var Evaluacion_estudiantepeerSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  'idEstudiante': {
type: String,
ref: 'Estudiante'
},
'idEstudianteEvaluar': {
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
tipo: String,
finalizo: Boolean,
fechaInicioTomada: Date,
fechaTerminada: Date,
wfestudiante: Number,
comentarios:[{type:String}],
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Evaluacion_estudiantepeer', Evaluacion_estudiantepeerSchema);
