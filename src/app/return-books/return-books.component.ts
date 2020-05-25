import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-books',
  templateUrl: './return-books.component.html',
  styleUrls: ['./return-books.component.css']
})
export class ReturnBooksComponent implements OnInit {

  message: string;
  borrowed;
  error;
  constructor(private bookService: BookService,
    private router: Router) { 
      this.getBooks();
    }
  
  ngOnInit(): void {
  }

  getBooks(){
    let userDetails = JSON.parse(localStorage.getItem('user'));
    this.bookService.getBorrowedData({id: userDetails.user.id}).subscribe(response =>{
      console.log(response);
        alert("Books Borrowed are below");
      this.borrowed = response.borrowed; 
    },error => {
      console.log(error);
    });
  }
 

  bookReturn(book){
    this.bookService.returnData({ bookId:  book.bookId, uid: book.uid}).subscribe(response =>{
      if(response.error){
        this.error = 'Book is not Returned';
        setTimeout(() =>{
          this.error = null;
        }, 5000);
      }else {
        this.message = 'Book returned to the Library';
      }
      setTimeout(() => {
        this.error = null;
      }, 5000);
    })
  }
}