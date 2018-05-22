var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Pregunta_assessmentSchema = new mongoose.Schema({
  'idPregunta': {
type: Schema.Types.ObjectId,
ref: 'Pregunta'
},
'idAssessment': {
type: Schema.Types.ObjectId,
ref: 'Assessment'
},
  puntaje: Number,
  comentario: String,

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pregunta_assessment', Pregunta_assessmentSchema);
