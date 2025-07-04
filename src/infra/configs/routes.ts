import BroadCastRoutes from "@infra/utils/router-broadcast.utils";
import * as controllers from "@infra/controllers";
const controllerList = Object.values(controllers);

export const routes: BroadCastRoutes = new BroadCastRoutes(controllerList);
