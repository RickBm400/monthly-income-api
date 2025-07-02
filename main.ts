import express, { Response, Request } from "express";
import dotenv from "dotenv";
import MongooseService from "./src/infra/database/mongoose.config";
import router from "./src/infra/configs/routes";

dotenv.config();
const app = express();
app.use("/api/", router.router);

const { PORT, DB = "" } = process.env;

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
