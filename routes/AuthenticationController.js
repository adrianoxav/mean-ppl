var User = ('../models/User.js');
var ServerConfigModel = require('../models/ServerConfigModel.js');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

const SECRET = 'ppl';
/**
 * LoginController.js
 *
 * @description :: Server-side logic for Login Users.
 */
module.exports = {


    login: function(req, res) {

      const credencial = req.body.email;
      const email =  (credencial.includes("@")) ? credencial :"";
      const username = (credencial.includes("@")) ? "" :credencial;
      const password = req.body.password;
      const crnSelected = req.body.crnSelected;
      User
        .findOne({
              $or: [
                  { $and: [{ email: email }, { deleted: false }] },
                  { $and: [{ username: username }, { deleted: false }] }
              ]
        })
        .populate({
          path: 'user.tipo'
                })

        .exec(function(err, user) {

          if (err) {
            return res.status(500), json({ message: 'Internal Server Error' });
          }

          if (!user) {
            // return res.status(401).json({ message:'Wrong Credentials'});
            return res.status(401).json({ message: 'user no found' });
          }

          if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Wrong Credentials' });
          }

          ServerConfigModel.find().limit(1).exec(function(err, config) {
            var sessionExp = config[0].sessionExp + 'h';
            //get array of [ { _crn: {document}, _role: {document} } ]

              const payload = {
                id: user.id,

                nombres: user.nombres,
                apellidos: user.apellidos,
                email: user.email
              };

              // console.log(sessionExp);
              const token = jwt.sign(payload, SECRET, { expiresIn: sessionExp });
              return res.status(200).json({
                message: 'OK',
                token: token,
                user: payload,
                exp: sessionExp
              });
            });





              });

          },

  isAuthenticated: function(req, res, next) {
  var token = getToken(req.headers);
    if (!token) {
      return res.status(403).json({
        message: 'Unauthorized'
      });
    }

    jwt.verify(token, SECRET, function(error, payload) {
      if (error) {
        return res.status(403).json({
          message: 'Invalid header token'
        });
      }
      console.log(payload);
      req.session = {
        user: payload
      };

      return next();
    })
  },

  getToken : function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
}
