import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    maxlenght: 50,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    maxlength: 60,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    maxlenght: 70,
  },

  gender: {
    type: String,
    required: false,
    default: null,
    enum: ["male", "female", "other"],
  },
});

export const User = mongoose.model("User", userSchema);
