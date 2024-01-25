import * as Yup from "yup";

export const addMovieSchema = Yup.object({
  id: Yup.number().required().min(1),
  name: Yup.string().required().max(55).trim(),
  released: Yup.number().required().min(1920),
  genres: Yup.array().of(
    Yup.string().oneOf([
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
    ])
  ),
  director: Yup.string().required().trim(),
});
