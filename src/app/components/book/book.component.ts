import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;
  bookId: string;

  constructor(private shos: ActivatedRoute, private bookService: BooksService) {

  }

  ngOnInit() {
    this.shos.params.subscribe((params) => {
      this.bookId = params['id'];
      if (this.bookId) {
        this.bookService.getBook(this.bookId).subscribe((book) => {
          this.book = book;
        });
      }
    });
  }

}
