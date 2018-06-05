var ServerConfigModel = require('../models/ServerConfigModel.js');

/**
 * ServerConfigController.js
 *
 * @description :: Server-side logic for managing ServerConfigs.
 */
module.exports = {

  /**
   * ServerConfigController.list()
   */
  list: function(req, res) {
    ServerConfigModel.find(function(err, ServerConfigs) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting ServerConfig.',
          error: err
        });
      }
      return res.json(ServerConfigs);
    });
  },

  /**
   * ServerConfigController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    ServerConfigModel.findOne({
      _id: id
    }, function(err, ServerConfig) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting ServerConfig.',
          error: err
        });
      }
      if (!ServerConfig) {
        return res.status(404).json({
          message: 'No such ServerConfig'
        });
      }
      return res.json(ServerConfig);
    });
  },

  /**
   * ServerConfigController.create()
   */
  create: function(req, res) {
    var ServerConfig = new ServerConfigModel({
      sessionExp: req.body.sessionExp,
      resetPassword: req.body.resetPassword
    });

    ServerConfig.save(function(err, ServerConfig) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating ServerConfig',
          error: err
        });
      }
      return res.status(201).json(ServerConfig);
    });
  },

  /**
   * ServerConfigController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    ServerConfigModel.findOne({
      _id: id
    }, function(err, ServerConfig) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting ServerConfig',
          error: err
        });
      }
      if (!ServerConfig) {
        return res.status(404).json({
          message: 'No such ServerConfig'
        });
      }

      ServerConfig.sessionExp = req.body.sessionExp ? req.body.sessionExp : ServerConfig.sessionExp;
      ServerConfig.resetPassword = req.body.resetPassword ? req.body.resetPassword : ServerConfig.resetPassword;
      ServerConfig.save(function(err, ServerConfig) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating ServerConfig.',
            error: err
          });
        }
        return res.json(ServerConfig);
      });
    });
  },

  /**
   * ServerConfigController.remove()
   */
   /*
  remove: function(req, res) {
    var id = req.params.id;
    ServerConfigModel.findByIdAndRemove(id, function(err, ServerConfig) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the ServerConfig.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }*/
};
