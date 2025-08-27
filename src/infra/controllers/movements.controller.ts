import RouterBuilder from "@infra/utils/router-builder.utils";

const MovementsRouter = RouterBuilder.create("movements");

// GET - all users
MovementsRouter.GET({
  path: "/",
  handler: (req, res) => {
    res.status(200).json({
      message: "hello from movements",
    });
  },
});

// POST - New user
MovementsRouter.POST({
  path: "/",
  handler: (req, res) => {
    try {
      res.status(200).json({
        message: "ola",
      });
    } catch (error) {
      res;
    }
  },
});

export default MovementsRouter;
