import { NewUserInputDTO } from "@application/dtos/inputs/user-input.dto";
import UserService from "@application/services/user.service";
import RouterBuilder from "@infra/utils/router-builder.utils";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const UsersRouter = RouterBuilder.create("users");
const userService = new UserService();

UsersRouter.POST({
  path: "/",
  handler: async function (req: Request, res: Response) {
    const body = await NewUserInputDTO.Set(req.body);
    const _user = await userService.postNewUser(body);

    res.status(StatusCodes.CREATED).json(_user);
  },
});

// UsersRouter.POST({
//   path: "/",
//   handler: async function (req, res) {},
// });

export default UsersRouter;
