var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var MateriaSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  nombre: String,

  cod_materia: String,

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Materia', MateriaSchema);
