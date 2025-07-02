import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import IRouterBuilder, {
  ControllerInput,
  HTTPVerbs,
} from "@domain/interfaces/controller-builder.interface";

/**
 * Implements the IRouterBuilder interface for Express routers, allowing dynamic
 * registration of route handlers with specified HTTP methods and paths. Provides
 * metadata about the router instance, including its name and router object.
 *
 * @param name - The base name for the router.
 * @param router - The Express Router instance.
 */
export default class RouterBuilder implements IRouterBuilder<Router> {
  constructor(public name: string, public router: Router) {}

  /**
   * Registers a route handler on the router for the specified HTTP verb and path.
   *
   * @param handler - The request handler function to be executed for the route.
   * @param method - The HTTP verb to use for the route (defaults to GET).
   * @param path - The route path (defaults to "/").
   * @throws Error if the HTTP method is not provided.
   */
  controller({ handler, method = HTTPVerbs.GET, path = "/" }: ControllerInput) {
    if (!method) throw new Error("method is required");

    const methodToString = method.toString().toLowerCase();
    (this.router as any)[methodToString](path, expressAsyncHandler(handler));
  }

  /**
   * Returns an object containing the route name and associated router.
   *
   * @returns An object with 'name' and 'router' properties.
   */
  getMeta() {
    return {
      name: `/${this.name}`,
      router: this.router,
    };
  }
}
