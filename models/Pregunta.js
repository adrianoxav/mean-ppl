var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


var PreguntaSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},

  pregunta: String,
  tipo: String,

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pregunta', PreguntaSchema);
