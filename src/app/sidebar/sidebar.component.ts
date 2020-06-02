import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isAdmin() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  isUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user.role === 'student') {
      return true;
    } else {
      return false;
    }
  }
}

