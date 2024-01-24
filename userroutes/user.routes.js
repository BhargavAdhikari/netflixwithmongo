import express from "express";
import { addUserSchema } from "./user.validation.js";
import { User } from "./user.model.js";

const router = express.Router();

router.post("/netflixuser/add", async (req, res) => {
  // extract new student from req.body
  const newUser = req.body;

  // validate the new User

  let validatedUserData;

  try {
    validatedUserData = await addUserSchema.validate(newUser);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }

  let alreadyAUser = await User.findOne({ email: newUser.email });

  if (alreadyAUser) {
    return res
      .status(409)
      .send({ message: "User with this email already exists" });
  }

  await User.create(validatedUserData);

  return res.status(201).send({ message: "Student is added successfully." });
});

export default router;
