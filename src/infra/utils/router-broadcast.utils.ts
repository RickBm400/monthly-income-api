import RouterBuilder from "./router-builder.utils";
import { Router } from "express";

export default class BroadCastRoutes {
  constructor(
    public routerInstances: RouterBuilder[],
    private readonly router: Router = Router(),
  ) {}

  broadCast(): Router {
    const stringList: string[] = [];

    this.routerInstances.forEach((routerInstance) => {
      const { name, router } = routerInstance.getMeta();
      stringList.push(`Broadcasting ${name}`);
      this.router.use(name, router);
    });

    const longString = stringList.reduce(
      (long, current) => (long < current.length ? current.length : long),
      0,
    );

    console.log("\n " + "-".repeat(longString + 2));
    stringList.forEach((e) =>
      console.log("| " + e + " ".repeat(longString - e.length) + " |"),
    );
    console.log(" " + "-".repeat(longString + 2) + "\n");

    return this.router;
  }
}
