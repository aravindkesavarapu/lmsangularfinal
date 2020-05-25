import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-books',
  templateUrl: './request-books.component.html',
  styleUrls: ['./request-books.component.css']
})
export class RequestBooksComponent implements OnInit {

  message: string;
  book;
  error;
  search;

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

  userRequest(bookId){
    let userDetails = JSON.parse(localStorage.getItem('user'));
    let userId = userDetails.user.id;
    this.bookService.requestData({ id: userId, bookId : bookId}).subscribe(response =>{
      console.log(response);
      if (response.error){
        this.error = response.message;
        alert("You have already requested the same book");
        setTimeout(() =>{
          this.error = null;
        },5000);
      }else {
        alert("request placed successfully");
        this.message = 'Request Placed to admin';
        setTimeout(() =>{
          this.message = null;
        },5000);
      }

    }
      
      )
  }
}
