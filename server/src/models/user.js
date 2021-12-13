import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ///jwt auth user id key for lookup
  password: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("Users", userSchema);

export default User;
