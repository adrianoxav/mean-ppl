var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var Evaluacion_grupoSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  'idGrupo': {
type: String,
ref: 'Grupo'
},
'idEvaluacion': {
type: String,
ref: 'Evaluacion'
},
tipo: String,
fechaInicioTomada: Date,
fechaTerminada: Date,
finalizo: {
type: Boolean,
'default': false
},
wfgrupo: Number,
numestudiantes:Number,
hanrealizado:Number,
comentarios:[{type:String}],
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Evaluacion_grupo', Evaluacion_grupoSchema);
