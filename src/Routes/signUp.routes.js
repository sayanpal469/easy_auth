const { createUser } = require('../Controller/signUp');

const signupRoutes = require('express').Router();

signupRoutes.route('/signUp/new').post(createUser);

module.exports = signupRoutes;