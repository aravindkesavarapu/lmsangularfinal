import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent implements OnInit {

  message;
  constructor( private bookService: BookService) { }

  ngOnInit(): void {
  }

  bookIssue(form: NgForm){
    this.bookService.issueData(form.value).subscribe(response =>{
      console.log(response);
      if (!response.error){
        alert("Book Issued");
      }else {
        this.message = 'Book is not Issued';
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);
    });
  }
}
