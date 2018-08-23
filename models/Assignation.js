var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var AssignationSchema = new mongoose.Schema({
  'idUser': {
type: Schema.Types.ObjectId,
ref: 'User'
},
'idCurso': {
type: Schema.Types.ObjectId,
ref: 'Curso'
},
_id: {
type: String,
'default' : shortid.generate
},
  grupo: Number,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assignation', AssignationSchema);
