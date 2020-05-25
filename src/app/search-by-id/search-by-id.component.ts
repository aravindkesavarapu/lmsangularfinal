import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {

  books;
  bookDetails: number;
  constructor(private bookService: BookService, private router: Router) {
    this.getBooksById(this.bookDetails);
  }

  ngOnInit(): void {
  }

  getBooksById(bookDetails) {
    this.bookService.getSearchByTitle(bookDetails).subscribe(response => {
      console.log(response);
      this.books = response.books;
    }, error => {
      console.log(error);
    }
    );
  }

}
