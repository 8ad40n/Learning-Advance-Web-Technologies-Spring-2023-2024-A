
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Product } from 'src/entity/product.entity';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post("add")
  async create(@Body() productDto: ProductDto): Promise<Product> {
    return this.productService.create(productDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() productDto: ProductDto): Promise<Product> {
    return this.productService.update(id, productDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productService.delete(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get("list")
  async getAllProducts() {
    return this.productService.getAllProducts();
  }
}
