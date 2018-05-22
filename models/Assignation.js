var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AssignationSchema = new mongoose.Schema({
  'idPersona': {
type: Schema.Types.ObjectId,
ref: 'Persona'
},
'idCurso': {
type: Schema.Types.ObjectId,
ref: 'Curso'
},
  grupo: Number,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assignation', AssignationSchema);
