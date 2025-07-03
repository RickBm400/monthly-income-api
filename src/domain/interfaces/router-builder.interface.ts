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

export default interface IRouterBuilder<T> {
  name: string;
  router: T;
  controller(input: ControllerInput): void;
  getMeta(): { name: string; router: T };
}
