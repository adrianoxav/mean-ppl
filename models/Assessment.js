var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AssessmentSchema = new mongoose.Schema({
    'idEvaluacion-estudiante': {
  type: Schema.Types.ObjectId,
  ref: 'Evaluacion-estudiante'
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
