import { Request, Response } from "express";
import RouterBuilder, { Methods } from "../utils/controller.utils";
import Router from "express";

const MovementsRouter = new RouterBuilder("movements", Router());

MovementsRouter.controller({
  method: Methods.GET,
  path: "/",
  handler: async function (req: Request, res: Response) {
    res.status(200).json({
      message: "hello from movements olo",
    });
  },
});

MovementsRouter.controller({
  method: Methods.GET,
  path: "/2",
  handler: async function (req: Request, res: Response) {
    res.status(200).json({
      message: "hello from movements 2",
    });
  },
});

export const Movements = MovementsRouter.getMeta();
