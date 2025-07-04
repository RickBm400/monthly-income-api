import UserService from "@application/services/user.service";
import RouterBuilder from "@infra/utils/router-builder.utils";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const UsersRouter = RouterBuilder.create("users");
const userService = new UserService();

UsersRouter.POST({
  path: "/",
  handler: async function (req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const newUser = await userService.postNewUser(body);

    res.status(StatusCodes.CREATED).json({
      user: newUser,
    });
  },
});

// UsersRouter.POST({
//   path: "/",
//   handler: async function (req, res) {},
// });

export default UsersRouter;
