var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CuestionarioSchema = new mongoose.Schema({
  'idPersona': {
type: Schema.Types.ObjectId,
ref: 'Persona'
},
creado: Date,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cuestionario', CuestionarioSchema);
