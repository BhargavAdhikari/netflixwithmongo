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
    min: 1920,
  },

  genres: {
    type: [String],
    required: true,
    oneOf: [
      "Action",
      "Thriller",
      "Drama",
      "Sci-Fi",
      "Crime",
      "Horror",
      "Adventure",
      "Mystery",
      "Documentary",
      "Comedy",
    ],
  },

  director: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Movie = mongoose.model("Movie", movieSchema);
