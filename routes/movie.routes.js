import express from "express";
import { Movie } from "./movie.model.js";

const router = express.Router();

router.post("/netflixmovie/add", async (req, res) => {
  //   console.log(req.body);
  let newMovie = req.body;

  await Movie.create(newMovie);
  return res.status(201).send({ message: "New movie added successfully" });
});

// router.get();

router.put("/netflixmovie/edit/:id", (req, res) => {
  //   let movieIdToBeEdited = req.params.id;
  //   let movieDataToBeEdited = req.body;
});

// router.delete();

export default router;
