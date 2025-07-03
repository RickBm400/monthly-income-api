import dotenv from "dotenv";
import express, { Response, Request } from "express";
import MongooseService from "./src/infra/configs/mongoose.config";
import router from "./src/infra/configs/routes";

dotenv.config();
const app = express();
const { PORT, DB = "" } = process.env;

app.use("/api/", router.router);

new MongooseService(DB).connect();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("connection stablished");
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
