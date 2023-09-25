const { userLogin, getUsers, getAllUsers } = require('../Controller/login');

const loginRoutes = require('express').Router();

loginRoutes.route('/login').get(userLogin);
loginRoutes.route('/login/user/:email').get(getUsers);

loginRoutes.route('/getUser').get(getAllUsers)

module.exports = loginRoutes;