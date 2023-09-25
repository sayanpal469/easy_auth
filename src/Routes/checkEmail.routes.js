const checkEmail = require("../Controller/checkEmail");
const checkEmailRoutes = require("express").Router();

checkEmailRoutes.route("/checkEmail").get(checkEmail);

module.exports = checkEmailRoutes;
