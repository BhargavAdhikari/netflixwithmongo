import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    min: 0,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  released: {
    type: Number,
    required: true,
    min: 0,
  },

  director: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Movie = mongoose.model("Movie", movieSchema);
