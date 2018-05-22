var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonaSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  email: String,
  identificacion: String,
  tipo: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Persona', PersonaSchema);
