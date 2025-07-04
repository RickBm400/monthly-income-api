import RouterBuilder from "./router-builder.utils";
import { Router } from "express";

export default class BroadCastRoutes {
  constructor(
    public routerInstances: RouterBuilder[],
    private readonly router: Router = Router(),
  ) {}

  broadCast(): Router {
    console.log("\n" + "-".repeat(20));
    this.routerInstances.forEach((routerInstance) => {
      const metadata = routerInstance.getMeta();
      console.log(`Broadcasting ${metadata.name}`);
      this.router.use(metadata.name, metadata.router);
    });
    console.log("-".repeat(20) + "\n");

    return this.router;
  }
}
