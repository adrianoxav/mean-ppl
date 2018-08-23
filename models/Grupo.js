var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var GrupoSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},

nombre: {
  type: String
},
estudiantes: [{
  type: String,
  ref: 'Estudiante',
}],
curso: {
  type: String,
  ref: 'Curso'
},
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Grupo', GrupoSchema);
