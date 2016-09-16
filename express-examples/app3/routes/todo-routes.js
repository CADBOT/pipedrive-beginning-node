var todos = require('../models').todos

module.exports = function(app) {
  app.route('/todos')
    .get(function(req, res) {
      res.json(todos) 
    })
    .post(function(req, res) {

    })

  app.route('/todos/:id)
    .get(function(req, res) {
      
    }
    .put(function(req, res) {

    }
    .delete(function(req, res) {

    })
}
