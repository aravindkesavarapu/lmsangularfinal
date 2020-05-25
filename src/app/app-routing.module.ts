import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByAuthorComponent } from './search-by-author/search-by-author.component';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';
import { ReturnBooksComponent } from './return-books/return-books.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { BorrowedBooksComponent } from './borrowed-books/borrowed-books.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { RequestBooksComponent } from './request-books/request-books.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { DeatailsComponent } from './deatails/deatails.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: 'addBook', component: AddBookComponent, data: {roles: ['admin']}, canActivate: [AuthGuard]},
  {path: 'removeBook', component: DeleteBookComponent, data: {roles: ['admin']}, canActivate: [AuthGuard]},
  {path: 'updateBook', component: UpdateBookComponent, data: {roles: ['admin']}, canActivate: [AuthGuard]},

  {path: 'booksInfo', component: ShowBooksComponent, data: {roles: ['admin', 'student']}, canActivate: [AuthGuard]},
  {path: 'showUsers', component: ShowUsersComponent, data: {roles: ['admin']}},
  {path: 'showRequests', component: ShowRequestsComponent, data: {roles: ['admin']}},
  {path: 'showIssuedBooks', component: IssuedBooksComponent, data: {roles: ['admin']}},
  {path: 'bookIssue', component: IssueBooksComponent, data: {roles: ['admin']}},

  {path: 'books', component: BooksComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},

  {path: 'booksByName', component: SearchByNameComponent},
  {path: 'booksByAuthor', component: SearchByAuthorComponent},
  {path: 'booksById', component: SearchByIdComponent},

  {path: 'returnBook', component: ReturnBooksComponent, data: {roles: ['student']}},
  {path: 'borrowedBooks', component: BorrowedBooksComponent, data: {roles: ['student']}},
  {path: 'requestBook', component: RequestBooksComponent, data: {roles: ['student']}},
  {path: 'search', component: SearchComponent},
  {path: 'books', component: BooksComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},


  {path: 'details', component: DeatailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
