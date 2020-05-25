import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }

  isAdmin(){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user.role === 'admin'){
      return true;
    }else{
      return false;
    }
  }
  isUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user.role === 'student'){
      return true;
    }else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
