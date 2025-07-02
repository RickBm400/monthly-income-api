import * as controllers from "../controllers";
import { Router } from "express";

const routerInstance = Router();
const routes: { name: string; router: Router }[] = Object.values(controllers);

routes.forEach((route) => {
  routerInstance.use(route.name, route.router);
});

// router.use(controllers.Movements.name, controllers.Movements.router);

export default { router: routerInstance };
