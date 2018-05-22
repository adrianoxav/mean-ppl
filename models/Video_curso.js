var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Video_cursoSchema = new mongoose.Schema({
  'idVideo': {
type: Schema.Types.ObjectId,
ref: 'Video'
},
'idCurso': {
type: Schema.Types.ObjectId,
ref: 'Curso'
},
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video_curso', Video_cursoSchema);
