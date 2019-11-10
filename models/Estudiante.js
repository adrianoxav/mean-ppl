var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var shortid = require('shortid');

var EstudianteSchema = new Schema({
  _id: {
  type: String,
  'default' : shortid.generate
},
  nombres: String,
  apellidos: String,
  identificacion: String,
  tipo: String,
  grupo: String,
  activo: Boolean,
  email: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    },
    curso:[ {
      type: String,
      ref: 'Curso'
    }]
});

EstudianteSchema.pre('save', function (next) {
    var estudiante = this;
    console.log("this", estudiante);
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(estudiante.password, salt, null, function (err, hash) {
                if (err) {
                  console.log(err);

                    return next(err);
                }
                estudiante.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

EstudianteSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Estudiante', EstudianteSchema);
