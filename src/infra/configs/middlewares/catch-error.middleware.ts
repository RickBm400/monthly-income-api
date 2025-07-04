import { Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const CatchMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: err.message,
    error: ReasonPhrases.INTERNAL_SERVER_ERROR,
  });
};

export default CatchMiddleware;
