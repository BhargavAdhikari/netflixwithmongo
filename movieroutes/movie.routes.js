import express from "express";
import { Movie } from "./movie.model.js";
import mongoose from "mongoose";
import { validationFunction } from "../middleware/middleware.validation.js";
import { addMovieSchema } from "./movie.validation.js";
import { checkMongoIdValidity } from "../utils/check.mongo.id.validity.js";

const router = express.Router();

router.post(
  "/netflixmovie/add",
  validationFunction(addMovieSchema),
  async (req, res) => {
    let newMovie = req.body;

    await Movie.create(newMovie);

    return res.status(201).send({ message: "New movie added successfully" });
  }
);

// movie details route

router.get(
  "/netflixmovie/details/:id",
  checkMongoIdValidity,

  async (req, res) => {
    let movieId = req.params.id;
    // check if mongo id exists in the database or not

    const requiredMovie = await Movie.findOne({ _id: movieId });

    if (!requiredMovie) {
      return res
        .status(400)
        .send({ message: "The movie does not exist in the database" });
    }

    return res.status(200).send({ message: "The movie is: ", requiredMovie });
  }
);

router.put(
  "/netflixmovie/edit/:id",
  checkMongoIdValidity,

  async (req, res) => {
    let movieId = req.params.id;
    let movieDataToBeEdited = req.body;

    // check if mongo id exists in the database or not

    const requiredMovie = await Movie.findOne({ _id: movieId });

    if (!requiredMovie) {
      return res
        .status(400)
        .send({ message: "The movie does not exist in the database" });
    }

    await Movie.updateOne(
      { _id: movieId },
      { $set: { ...movieDataToBeEdited } }
    );

    return res
      .status(400)
      .send({ message: "The MOVIE is edited in the database " });
  }
);

// delete a movie route

router.delete(
  "/netflixmovie/delete/:id",
  checkMongoIdValidity,

  async (req, res) => {
    let requiredIdToBeDeleted = req.params.id;

    let requiredMovie = await Movie.findOne({ _id: requiredIdToBeDeleted });

    if (!requiredMovie) {
      return res.status(400).send({
        message:
          "The movie doesn't exit in the database for deletion operation",
      });
    }

    await Movie.deleteOne({ _id: requiredIdToBeDeleted });

    return res
      .status(200)
      .send({ message: "The movie is deleted from the database" });
  }
);

export default router;
