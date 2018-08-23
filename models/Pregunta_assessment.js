var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var Pregunta_assessmentSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
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
