import mongoose from "mongoose";

export const checkMongoIdValidity = (req, res, next) => {
  let id = req.params.id;

  let isValidMongoId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidMongoId) {
    return res.status(409).send({ message: "Invalid Mongo Id" });
  }
  next();
};
