import { ICatalogRepository } from "../interfaces/catalogRepository.interface";

export class CatalogService {

    private _repository: ICatalogRepository;

    constructor(repository: ICatalogRepository){
        this._repository = repository;
    }

    async createProduct(input: any){
        const data = await this._repository.create(input);
        if(!data.id) throw new Error("unable to create product");
        return data;
    }

    async updateProduct(input: any){
        const data = await this._repository.update(input);
        // emit event to update record in Elastic search
        if(!data.id) throw new Error("unable to update product");
        return data;
    }

    // instead of this we will get products from Elastic search
    async getProducts(limit: number, offset: number){
        const products = await this._repository.findAll(limit, offset);
        if(!products) throw new Error("unable to get products");
        return products;
    }

    async getProduct(id: number){
        const product = await this._repository.findOne(id);
        if(!product) throw new Error("unable to get product");
        return product;
    }

    async deleteProduct(id: number){
        const response = await this._repository.delete(id);
        if(!response) throw new Error("unable to delete product");
        // delete record from Elastic search
        return response;
    }

}