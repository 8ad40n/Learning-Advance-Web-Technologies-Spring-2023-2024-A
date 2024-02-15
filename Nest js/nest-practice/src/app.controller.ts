import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // add book
  @Post('/add')
  addBook(): string {
    return 'This will add book';
  }
  // delete book
  @Delete('/delete')
  deleteBook(): string {
    return 'This will delete book';
  }
  // update book
  @Put('/update')
  updateBook(): string {
    return 'This will update book';
  }
  // find all books
  @Get('/findAll')
  findAllBook(): string {
    return 'This will find all books';
  }

  @Get('/findBookById/:id')
  findBookById(@Param() params: any): string {
    console.log(params.id);
    return `This will find a book of ID: #${params.id}`;
  }
}
