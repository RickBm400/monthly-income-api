import RouterBuilder from "@infra/utils/router-builder.utils";

const MovementsRouter = RouterBuilder.create("movements")
  // GET
  .configure((builder) => {
    builder.GET({
      path: "/",
      handler: (req, res) => {
        res.status(200).json({
          message: "hello from movements",
        });
      },
    });
  })
  // POST
  .configure((builder) => {
    builder.POST({
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
  });

export default MovementsRouter;
