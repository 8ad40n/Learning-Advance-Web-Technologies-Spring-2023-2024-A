import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController{
    constructor(private bookService: BookService){

    }
    // find all books
    @Get("/findAll")
    findAllBooks(): Book[]{
        return this.bookService.findAllBook();
    }
    // update books
    @Put("/update")
    updateBooks(@Body() book: Book): string{
        return this.bookService.updateBookService(book);
    }
    // Delete books

    // param: localhost:3000/book/delete/1
    @Delete("/delete")
    deleteBooks(@Param("id") bookId: string): string{
        return this.bookService.deleteBookService(bookId);
    }
    // Add books
    @Post("add")
    addBooks(@Body() book: Book): string{
        return this.bookService.addBookService(book);
    }
}