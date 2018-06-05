var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ServerConfigSchema = new Schema({
	'sessionExp' : {
	 	type: Number,
		default: 8
	},
	'resetPassword': {
		type: Number,
		default: 30
	}}, {
  versionKey: false,
  timestamps: true,
  collection: 'serverConfig'});
module.exports = mongoose.model('ServerConfig', ServerConfigSchema);
