var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var AssessmentSchema = new mongoose.Schema({
    'idEvaluacion-estudiante': {
  type: Schema.Types.ObjectId,
  ref: 'Evaluacion-estudiante'
},
_id: {
type: String,
'default' : shortid.generate
},

  puntaje: Number,
  evaluacion: String,
  finalizo: Boolean,
  fechaInicio: {
    type: Date,
    unique: false
  },
  fechaInicioTomada: { // DOCUMENTACION
    type: Date
  },
  fechaTerminada: { // DOCUMENTACION
    type: Date
  },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
