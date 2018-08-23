var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const shortid = require('shortid');


var PersonaSchema = new mongoose.Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  nombres: String,
  apellidos: String,
  email: String,
  identificacion: String,
  tipo: String,
  activo: Boolean,
  password: String,
hash: String,
  salt: String,


  updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Persona', PersonaSchema);
