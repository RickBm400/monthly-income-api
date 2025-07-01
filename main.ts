import express, { Response } from "express";
import dotenv from "dotenv";
import MongooseService from "./src/infra/database/mongoose.config";

dotenv.config();
const app = express();

const { PORT, DB = "" } = process.env;

new MongooseService(DB).connect();

app.get("/", (res: Response) => {
  res.status(200).send("Hello World");
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
