import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}


  async findAll() {
    //return this.users;
    return await this.productRepo.find({});
  }

  async findById(id: number) {
    //return this.users.find((user) => user.id === id);
    return await this.productRepo.find({ where: { id: id } });
  }

  async create(createProductDto: CreateProductDto) {
    
    const user = await this.productRepo.create(createProductDto);
    return await this.productRepo.save(user);
  }
}
