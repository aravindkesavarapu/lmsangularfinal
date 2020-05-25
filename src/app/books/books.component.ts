import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;
  message: string;
  constructor( private bookService: BookService) { }

  ngOnInit(): void {
  }

  getBooks() {
    this.bookService.getData().subscribe(response => {
      console.log(response);
      this.books = response.books;
    }, error => {
      console.log(error);
    }
    );
  }

 
}
