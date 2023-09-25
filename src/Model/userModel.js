var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, "Please provide a user name"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide your email"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please provide your password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
