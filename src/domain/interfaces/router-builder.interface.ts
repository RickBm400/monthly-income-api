import { RequestHandler } from "express";

export enum HTTPVerbs {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface ControllerInput {
  handler: RequestHandler;
  method?: HTTPVerbs;
  path: string;
}

export default abstract class ACRouterBuilder<T> {
  protected readonly name: string;
  readonly router: T;
  protected abstract controller(input: ControllerInput): void;
  abstract getMeta(): { name: string; router: T };
}
