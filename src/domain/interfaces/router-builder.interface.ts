import { RequestHandler, RequestParamHandler } from "express";

export enum HTTPVerbs {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface RouterMetadata<T> {
  pathName: string;
  router: T;
}

export interface ControllerInput {
  handler: RequestParamHandler;
  method?: HTTPVerbs;
  path: string;
}

/**
 * Abstract class for router builders, providing a common interface for creating and managing routes.
 *
 * @export
 * @abstract
 * @class ACRouterBuilder
 * @typedef {ACRouterBuilder}
 * @template T
 */
export default abstract class ACRouterBuilder<T> {
  protected readonly _name: string;
  readonly _router: T;
  protected abstract controller(input: ControllerInput): void;
  abstract getMeta(): RouterMetadata<T>;
}
