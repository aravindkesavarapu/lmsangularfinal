import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isAdmin(){
    const userDetails = JSON.parse(localStorage.getItem('user'));
    if (userDetails && userDetails.user.role === 'admin'){
      return true;
    }else{
      return false;
    }
  }
  isUser(){
    const userDetails = JSON.parse(localStorage.getItem('user'));
    if (userDetails && userDetails.user.role === 'student'){
      return true;
    }else{
      return false;
    }
  }

}
