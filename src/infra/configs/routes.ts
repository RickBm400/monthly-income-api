import * as controllers from "@infra/controllers";
import { Router } from "express";

const routerInstance = Router();
const routes: { name: string; router: Router }[] = Object.values(controllers);

routes.forEach((route) => {
  routerInstance.use(route.name, route.router);
});

export default { router: routerInstance };
