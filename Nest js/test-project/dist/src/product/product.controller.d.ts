import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(): Promise<import("../entities/product.entity").Product[]>;
    findOne(id: number): Promise<import("../entities/product.entity").Product[]>;
    createProduct(createProductDto: CreateProductDto): Promise<import("../entities/product.entity").Product>;
}
