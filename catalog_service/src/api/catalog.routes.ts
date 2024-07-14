import { NextFunction, Request, Response, Router } from "express";

const catalogRouter = Router();

catalogRouter.post(
  "/product",
  (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({});
  }
);

export default catalogRouter; 