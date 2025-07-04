import dotenv from "dotenv";
import express, { Response, Request } from "express";
import MongooseService from "./src/infra/configs/mongoose.config";
import CatchMiddleware from "./src/infra/configs/middlewares/catch-error.middleware";
import { routes } from "./src/infra/configs/routes";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const { PORT, DB = "" } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/", routes.broadCast());

new MongooseService(DB).connect();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("connection stablished");
});

app.use(CatchMiddleware);

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
