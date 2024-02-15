import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {

  addBook(): string {
    return 'This will add book';
  }
  // delete book
  deleteBook(): string {
    return 'This will delete book';
  }
  // update book
  updateBook(): string {
    return 'This will update book';
  }
  // find all books
  findAllBook(): string {
    return 'This will find all books';
  }

}
