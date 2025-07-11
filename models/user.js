import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  given_name: String,
  surname: String,
  dob: String,
  email_or_phone: String,
  password: String
});

export default mongoose.model("User", userSchema);
