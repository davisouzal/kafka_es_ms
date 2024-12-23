import { ICatalogRepository } from "../interfaces/catalogRepository.interface";
import { Product } from "../models/product.model";
import { ProductFactory } from "../utils/fixtures";

export class CatalogRepository implements ICatalogRepository {
  async create(data: Product): Promise<Product> {
    const product = ProductFactory.build();
    return Promise.resolve(product);
  }
  async update(data: Product): Promise<Product> {
    const product = ProductFactory.build();
    return Promise.resolve(product);
  }
  async delete(id: any): Promise<Product> {
    const product = ProductFactory.build();
    return Promise.resolve(product);
  }
  async findAll(limit: number, offset: number): Promise<Product[]> {
    const products = ProductFactory.buildList(limit);
    return Promise.resolve(products);
  }
  async findOne(id: number): Promise<Product> {
    const product = ProductFactory.build();
    return Promise.resolve(product);
  }
}
