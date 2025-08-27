import expressAsyncHandler from "express-async-handler";
import ACRouterBuilder, {
  ControllerInput,
  HTTPVerbs,
} from "@domain/interfaces/router-builder.interface";
import { Router } from "express";

type HTTPVerbMethods = {
  [K in HTTPVerbs]: (param: ControllerInput) => void;
};

/**
 * Implements the IRouterBuilder interface for Express routers, allowing dynamic
 * registration of route handlers with specified HTTP methods and paths. Provides
 * metadata about the router instance, including its name and router object.
 *
 * @param name - The base name for the router.
 */
export default class RouterBuilder
  extends ACRouterBuilder<Router>
  implements HTTPVerbMethods
{
  constructor(
    protected readonly name: string,
    readonly router: Router = Router(),
  ) {
    super();
    this.$_InitVerbs(this);
  }
  /**
   * Registers a route handler on the router for the specified HTTP verb and path.
   *
   * @param handler - The request handler function to be executed for the route.
   * @param method - The HTTP verb to use for the route (defaults to GET).
   * @param path - The route path (defaults to "/").
   * @throws Error if the HTTP method is not provided.
   */
  protected controller({
    handler,
    method = HTTPVerbs.GET,
    path = "/",
  }: ControllerInput) {
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
      pathName: `/${this.name}`,
      router: this.router,
    };
  }

  private $_InitVerbs(routerBuilder: RouterBuilder) {
    (Object.values(HTTPVerbs) as HTTPVerbs[]).forEach(
      (method: Partial<HTTPVerbs>) => {
        (routerBuilder as any)[method] = (param: ControllerInput) => {
          routerBuilder.controller({ ...param, method: method });
        };
      },
    );
  }

  GET!: (param: ControllerInput) => void;
  POST!: (param: ControllerInput) => void;
  PATCH!: (param: ControllerInput) => void;
  PUT!: (param: ControllerInput) => void;
  DELETE!: (param: ControllerInput) => void;

  static create(name: string) {
    return new RouterBuilder(name);
  }
}
