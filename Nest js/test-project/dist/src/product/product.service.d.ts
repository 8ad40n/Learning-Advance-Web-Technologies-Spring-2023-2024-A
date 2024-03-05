import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductService {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product[]>;
    create(createProductDto: CreateProductDto): Promise<Product>;
}
