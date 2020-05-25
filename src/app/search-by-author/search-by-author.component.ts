import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-author',
  templateUrl: './search-by-author.component.html',
  styleUrls: ['./search-by-author.component.css']
})
export class SearchByAuthorComponent implements OnInit {

  bookDetails ;
  constructor(private bookService: BookService, private router: Router) {
    this.getBooksByAuthor(this.bookDetails);
  }

  ngOnInit(): void {
  }

  getBooksByAuthor(bookDetails) {
    this.bookService.getSearchByAuthor(bookDetails).subscribe(response => {
      console.log(response);
      this.bookDetails = response.books;
    }, error => {
      console.log(error);
    }
    );
  }

}
