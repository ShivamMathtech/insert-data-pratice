const { mongoose } = require("../config/db");

const userSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const User = mongoose.model("User", userSchema);
exports.User = User;
