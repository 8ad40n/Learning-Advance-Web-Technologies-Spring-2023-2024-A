import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { BookService } from './book.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private bookService:BookService, private readonly appService: AppService){}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // add book
  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }
  // delete book
  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }
  // update book
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }
  // find all books
  @Get('/findAll')
  findAllBook(): string {
    return this.bookService.findAllBook();
  }

  // find a book by ID
  @Get('/findBookById/:id')
  findBookById(@Param() params: any): string {
    console.log(params.id);
    return `This will find a book of ID: #${params.id}`;
  }
}
