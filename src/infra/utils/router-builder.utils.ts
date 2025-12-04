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
    protected readonly _name: string,
    readonly _router: Router = Router(),
  ) {
    super();
    this.initializeVerbMethods();
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
    this.validateControllerInput({ handler, method, path });

    const httpMethod = method.toString().toLowerCase() as keyof Router;
    const routerMethod = this._router[httpMethod] as Function;

    if (typeof routerMethod !== "function") {
      throw new Error(`HTTP method '${method}' is not supported`);
    }

    routerMethod.call(this._router, path, handler);
  }

  /**
   * Returns an object containing the route name and associated router.
   *
   * @returns An object with 'name' and 'router' properties.
   */
  getMeta() {
    return {
      pathName: `/${this._name}`,
      router: this._router,
    };
  }

  private initializeVerbMethods() {
    const httpVerbs = Object.values(HTTPVerbs) as HTTPVerbs[];

    httpVerbs.forEach((verb: Partial<HTTPVerbs>) => {
      (this as RouterBuilder)[verb] = (param: ControllerInput): void => {
        this.controller({ ...param, method: verb });
      };
    });
  }

  GET!: (param: ControllerInput) => void;
  POST!: (param: ControllerInput) => void;
  PATCH!: (param: ControllerInput) => void;
  PUT!: (param: ControllerInput) => void;
  DELETE!: (param: ControllerInput) => void;

  private validateControllerInput({
    handler,
    method,
    path,
  }: ControllerInput): void {
    if (!handler) {
      throw new Error("Handler function is required");
    }
    if (!method) {
      throw new Error("HTTP method is required");
    }
    if (typeof handler !== "function") {
      throw new Error("Handler must be a function");
    }
    if (typeof path !== "string") {
      throw new Error("Path must be a string");
    }
  }

  static create(name: string) {
    return new RouterBuilder(name);
  }

  /**
   * Implement fluent api pattern for better instance building
   *
   * @public
   * @param {(builder: RouterBuilder) => void} callback
   * @returns {RouterBuilder}
   */
  public configure(callback: (builder: RouterBuilder) => void): RouterBuilder {
    callback(this);
    return this;
  }
}
