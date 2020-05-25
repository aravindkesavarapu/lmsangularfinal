import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

search;


message: string;
  book: any;

  constructor(private bookService: BookService, private router: Router) { 
    this.getBooks();
  }

  ngOnInit(): void {
  }

  getBooks() {
    this.bookService.getData().subscribe(response => {
      console.log(response);
      this.book = response.book;
    }, error => {
      console.log(error);
    }
    );
  }

deleteBook(bookId: number) {

  this.bookService.deleteData(bookId).subscribe(response => {
    console.log(response);
    if (!response.error) {
      alert("Book Deleted Successfully");
      //this.router.navigateByUrl('/booksInfo'); 
    } else {
      alert("Book  Not Deleted ");
      //this.router.navigateByUrl('/booksInfo');
    }
    this.getBooks();
    setTimeout(() => {
    this.message = null;
      }, 5000);
  }
  );
  this.router.navigateByUrl('/booksInfo');
}


selectBook(books){
  this.router.navigate(['/updateBook'], {queryParams: books});
}
}
