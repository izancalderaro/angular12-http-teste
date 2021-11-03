import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
   selector: 'app-observable',
   templateUrl: './observable.component.html',
   styleUrls: ['observable.component.css']
})
export class ObservableComponent implements OnInit {
   books: Book[] = [];
   errorMessage = '';
   bookName = '';
   book = { id: 0, name: '' };
   constructor(private bookService: BookService) { }
   ngOnInit() {
      this.fetchBooks();
   }
   fetchBooks() {
      this.bookService.getBooksWithObservable()
         .subscribe(books => this.books = books,
            error => this.errorMessage = error);
   }
   addBook() {
      this.bookService.addBookWithObservable(this.book)
         .subscribe(book => {
            this.fetchBooks();
            this.reset();
            this.bookName = book.name;
         },
            error => this.errorMessage = error);
   }
   private reset() {
      this.book.id = 0;
      this.book.name = '';
      this.errorMessage = '';
      this.bookName = '';
   }
}
