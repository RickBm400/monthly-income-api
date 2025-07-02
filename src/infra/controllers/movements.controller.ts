import { Request, Response } from "express";
import RouterBuilder from "@infra/utils/router-builder.utils";
import { HTTPVerbs } from "@domain/interfaces/controller-builder.interface";
import Router from "express";

const MovementsRouter = new RouterBuilder("movements", Router());

// GET - all users
MovementsRouter.controller({
  method: HTTPVerbs.GET,
  path: "/",
  handler: async function (req: Request, res: Response) {
    res.status(200).json({
      message: "hello from movements olo",
    });
  },
});

// POST - New user
MovementsRouter.controller({
  method: HTTPVerbs.POST,
  path: "/",
  handler: async function (req: Request, res: Response) {
    try {
    } catch (error) {
      res;
    }
  },
});

export const Movements = MovementsRouter.getMeta();
