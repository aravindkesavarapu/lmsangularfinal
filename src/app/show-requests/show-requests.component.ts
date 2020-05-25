import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css']
})export class ShowRequestsComponent implements OnInit {

  details;
  message: string;
  error;
  constructor(private bookService: BookService, private router: Router) {
      this.getRequestDetails();
    }

  ngOnInit(): void {
  }

  getRequestDetails(){
    this.bookService.getRequestData().subscribe(response => {
      console.log(response);
      this.details = response.details;
    }, error => {
      console.log(error);
    }
    );
  }

  bookIssue(detail){
    console.log(detail.uid);
    console.log(detail.uId);
    console.log(detail.UId);
    this.bookService.issueData({id: detail.uid, bookId: detail.bookId }).subscribe(response =>{
      console.log(response);
      console.log(detail.uid);
      console.log(detail.uId);
      console.log(detail.UId);
     
      if (!response.error){
        console.log(detail.uid);
        console.log(detail.uId);
        console.log(detail.UId);
       
        alert("Book Issued to the User")
        this.message = 'Book Issued to the User';
      }else {
        console.log(detail.uid);
        console.log(detail.uId);
        console.log(detail.UId);
       
        this.error = 'Book  is not Issued';
      }
      this.getRequestDetails();
      setTimeout(() => {
        this.message = null;
      },5000);
    })
  }
}
