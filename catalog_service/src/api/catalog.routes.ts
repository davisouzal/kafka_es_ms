import { NextFunction, Request, Response, Router } from "express";
import { CatalogService } from "../services/catalog.service";
import { CatalogRepository } from "../repositories/catalog.repository";
import { RequestValidator } from "../utils/requestValidator";
import { CreateProductRequest } from "../dto/product.dto";

const catalogRouter = Router();

export const catalogService = new CatalogService(new CatalogRepository());

catalogRouter.post(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { errors, input } = await RequestValidator(
        CreateProductRequest,
        req.body
      );
      if (errors) return res.status(400).json(errors);
      const data = await catalogService.createProduct(input);
      return res.status(201).json(data);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  }
);

export default catalogRouter;
