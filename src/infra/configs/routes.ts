import BroadCastRoutes from "@infra/utils/router-broadcast.utils";
import * as controllers from "@infra/controllers";
import RouterBuilder from "@infra/utils/router-builder.utils";

const arrayControllers: RouterBuilder[] = Object.values(controllers);
export const routes: BroadCastRoutes = new BroadCastRoutes(arrayControllers);
