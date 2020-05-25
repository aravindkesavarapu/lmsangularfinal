import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { BorrowedBooksComponent } from './borrowed-books/borrowed-books.component';
import { ReturnBooksComponent } from './return-books/return-books.component';
import { RequestBooksComponent } from './request-books/request-books.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByAuthorComponent } from './search-by-author/search-by-author.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';
import { FilterPipe } from './filter.pipe';
import { FilterAuthorPipe } from './filter-author.pipe';
import { SearchComponent } from './search/search.component';
import { DeatailsComponent } from './deatails/deatails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DeleteBookComponent,
    UpdateBookComponent,
    RegisterComponent,
    HomeComponent,
    BooksComponent,
    ShowBooksComponent,
    AdminComponent,
    UserComponent,
    IssuedBooksComponent,
    BorrowedBooksComponent,
    ReturnBooksComponent,
    RequestBooksComponent,
    ShowUsersComponent,
    AddBookComponent,
    SearchByIdComponent,
    SearchByNameComponent,
    SearchByAuthorComponent,
    ShowRequestsComponent,
    IssueBooksComponent,
    FilterPipe,
    FilterAuthorPipe,
    SearchComponent,
    DeatailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
