import { Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const catchMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    error: ReasonPhrases.INTERNAL_SERVER_ERROR,
    data: err.message,
  });
};

export default catchMiddleware;
