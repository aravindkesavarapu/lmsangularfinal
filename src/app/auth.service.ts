import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  myURL = 'http://localhost:7070/lmsspringrest/';
  constructor(private http: HttpClient) { }


  register(user){
    return this.http.post<any>(`${this.myURL}addUser`, user);
  }

  login(user){
    return this.http.post<any>(`${this.myURL}login`, user);
  }
}