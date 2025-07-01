import express, { Response } from "express";
import dotenv from "dotenv";
import MongooseService from "./src/infra/database/mongoose.config";
import mongoose from "mongoose";

dotenv.config();
const app = express();

const { PORT, DB = "" } = process.env;

const mongo = new MongooseService(mongoose);
mongo.connect(DB);

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
