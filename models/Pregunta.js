var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PreguntaSchema = new mongoose.Schema({
  'idCuestionario': {
type: Schema.Types.ObjectId,
ref: 'Cuestionario'
},
  pregunta: String,
  tipo: String,

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pregunta', PreguntaSchema);
