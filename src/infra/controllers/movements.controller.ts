import { Request, Response } from "express";
import RouterBuilder from "@infra/utils/router-builder.utils";

const MovementsRouter = new RouterBuilder("movements");

// GET - all users
MovementsRouter.GET({
  path: "/",
  handler: async function (req: Request, res: Response) {
    res.status(200).json({
      message: "hello from movements olo",
    });
  },
});

// POST - New user
MovementsRouter.GET({
  path: "/",
  handler: async function (req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "ola",
      });
    } catch (error) {
      res;
    }
  },
});

export const Movements = MovementsRouter.getMeta();
