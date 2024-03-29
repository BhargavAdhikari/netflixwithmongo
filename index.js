import express from "express";
import connectDB from "./connect.db.js";
import movieRouter from "./movieroutes/movie.routes.js";
import userRouter from "./userroutes/user.routes.js";

const app = express();

app.use(express.json());
app.use(movieRouter);
app.use(userRouter);
connectDB();

const PORT = 6000;

try {
  app.listen(PORT, () => {
    console.log(`The server is successfully running on port ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
  console.log("The Server has failed to start ");
}
