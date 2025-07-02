import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { RequestHandler } from "express";
import { throws } from "assert";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export default class RouterBuilder {
  constructor(public name: string, public router: Router) {}

  controller({
    handler,
    method = Methods.GET,
    path = "/",
  }: {
    handler: RequestHandler;
    method?: Methods;
    path: string;
  }) {
    if (!method) throw new Error("method is required");
    const methodToString = method.toString().toLowerCase();
    (this.router as any)[methodToString](path, expressAsyncHandler(handler));
  }

  getMeta() {
    return {
      name: `/${this.name}`,
      router: this.router,
    };
  }
}
