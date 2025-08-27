import RouterBuilder from "./router-builder.utils";
import { Router } from "express";

export default class BroadCastRoutes {
  constructor(
    public routerInstances: RouterBuilder[],
    private readonly router: Router = Router(),
  ) {}

  broadCast(): Router {
    const routerList: string[] = [];

    this.routerInstances.forEach((routerInstance) => {
      const { pathName, router } = routerInstance.getMeta();
      routerList.push(`Broadcasting ${pathName}`);
      this.router.use(pathName, router);
    });

    this.printRouterList(routerList);
    return this.router;
  }

  private printRouterList(routerList: String[]) {
    const longString = routerList.reduce(
      (long, current) => (long < current.length ? current.length : long),
      0,
    );

    console.log("\n " + "-".repeat(longString + 2));
    routerList.forEach((e) =>
      console.log("| " + e + " ".repeat(longString - e.length) + " |"),
    );
    console.log(" " + "-".repeat(longString + 2) + "\n");
  }
}
