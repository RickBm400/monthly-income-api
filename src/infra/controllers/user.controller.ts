import { NewUserInputDTO } from "@application/dtos/inputs/user-input.dto";

import UserService from "@application/services/user.service";
import RouterBuilder from "@infra/utils/router-builder.utils";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const UsersRouter = RouterBuilder.create("users");
const userService = new UserService();

UsersRouter.POST({
  path: "/",
  handler: async (req: Request, res: Response) => {
    const body = await NewUserInputDTO.create(req.body).validate();
    const payload = await userService.postNewUser(body);

    res.status(StatusCodes.CREATED).json({
      data: { user: payload },
      status: StatusCodes.CREATED,
    });
  },
});

// UsersRouter.POST({
//   path: "/",
//   handler: async function (req, res) {},
// });

export default UsersRouter;
