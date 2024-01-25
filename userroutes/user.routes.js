import express from "express";
import { addUserSchema } from "./user.validation.js";
import { User } from "./user.model.js";
import { validationFunction } from "../middleware/middleware.validation.js";

const router = express.Router();

// version 1

// router.post("/netflixuser/add", async (req, res) => {
//   // extract new student from req.body
//   const newUser = req.body;

//   // validate the new User

//   let validatedUserData;

//   try {
//     validatedUserData = await addUserSchema.validate(newUser);
//   } catch (error) {
//     return res.status(400).send({ message: error.message });
//   }

//   let alreadyAUser = await User.findOne({ email: newUser.email });

//   if (alreadyAUser) {
//     return res
//       .status(409)
//       .send({ message: "User with this email already exists" });
//   }

//   await User.create(validatedUserData);

//   return res.status(201).send({ message: "Student is added successfully." });
// });

// version 2

// router.post(
//   "/netflixuser/add",

//   async (req, res, next) => {
//     let newUser = req.body;

//     let validatedUserData;

//     try {
//       validatedUserData = await addUserSchema.validate(newUser);
//     } catch (error) {
//       return res.status(404).send({ message: error.message });
//     }

//     req.body = validatedUserData;

//     next();
//   },

//   async (req, res) => {
//     let newUser = req.body;

//     let alreadyAUser = await User.findOne({ email: newUser.email });

//     if (alreadyAUser) {
//       return res
//         .status(400)
//         .send({ message: "The user already exists with the same email" });
//     }

//     await User.create(newUser);

//     return res
//       .status(201)
//       .send({ message: "New User is successfully added in the database" });
//   }
// );

router.post(
  "/netflixuser/add",

  validationFunction(addUserSchema),

  async (req, res) => {
    let newUser = req.body;

    let alreadyAUser = await User.findOne({ email: newUser.email });

    if (alreadyAUser) {
      return res
        .status(200)
        .send({ message: "The user with this email already exists" });
    }

    await User.create(newUser);

    return res
      .status(200)
      .send({ message: "New User is successfully added in the database " });
  }
);

export default router;
