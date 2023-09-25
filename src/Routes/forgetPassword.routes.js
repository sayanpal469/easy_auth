const changePassword = require('../Controller/forgetPassword');

const forgetPassRoutes = require('express').Router();

forgetPassRoutes.route('/forget/:email').put(changePassword)

module.exports = forgetPassRoutes;
