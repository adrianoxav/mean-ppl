var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var CursoSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
'idMateria': {
type: String,
ref: 'Materia'
},
profesores: [{
  type: String,
  ref: 'User',
  'default': ''
}],
estudiantes: [{
  type: String,
  ref: 'User'
}],
grupos: [{
  type: String,
  ref: 'Grupo'
}],
  cod_materia: String,
  nombre: String,
  anio: String,
  termino: String,
  paralelo: String,
  numgrupos: String,

  updated_date: { type: Date, default: Date.now },
});

CursoSchema.statics.anadirEstudianteaCurso = function(idcurso, idUser, callback) {
  this.update({_id: idcurso}, {$addToSet: {estudiantes: idUser}}, callback)
}
CursoSchema.statics.anadirProfesoraCurso = function(idcurso, idUser, callback) {
  this.update({_id: idcurso}, {$addToSet: {profesores: idUser}}, callback)
}
module.exports = mongoose.model('Curso', CursoSchema);
