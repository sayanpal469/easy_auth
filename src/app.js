const express = require("express");
const cors = require("cors");

const signupRoutes = require("./Routes/signUp.routes");
const loginRoutes = require("./Routes/login.routes");
const checkEmailRoutes = require("./Routes/checkEmail.routes");
const forgetPassRoutes = require("./Routes/forgetPassword.routes");

const app = express();

app.use(express.json());
app.use(cors());

// Sign up api
app.use("/api/auth", signupRoutes);

// login api
app.use("/api/auth", loginRoutes);

// Check for forget password api
app.use("/api/auth", checkEmailRoutes);
app.use("/api/auth", forgetPassRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Server");
});

module.exports = app;
