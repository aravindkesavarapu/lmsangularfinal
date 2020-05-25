import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  
  borrows;
  constructor(private bookService : BookService,private router:Router) { }

  ngOnInit(): void {
  }

  // getBorrowedDetails(){
  //   this.bookService.getBorrowedData(bean: bookid).subscribe(response => {
  //     console.log(response);
  //    // this.borrows=response.issues;
  //   }, error => {
  //     console.log(error);
  //   }
  //   );
  // }

}
