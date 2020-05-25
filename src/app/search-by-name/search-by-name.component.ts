import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {

  book;
  search;
  constructor(private bookService: BookService, private router: Router) {
    this.getBooksByTitle();
  }

  ngOnInit(): void {
  }

  getBooksByTitle() {
    this.bookService.getData().subscribe(response => {
      console.log(response);
      this.book = response.book;
    }, error => {
      console.log(error);
    }
    );
  }

}
