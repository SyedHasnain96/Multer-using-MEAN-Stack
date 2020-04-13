var express = require('express');
var router = express.Router();
const companyController = require('../controllers').company

module.exports = (app) => {
  app.post('/api/company', companyController.create);
}