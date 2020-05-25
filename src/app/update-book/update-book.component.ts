
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {


  bookToBeUpdated;

  message: string;
  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
    ) {
    this.route.queryParams.subscribe(data => {
      console.log('Sucessfully Updated', data);
      this.bookToBeUpdated = data;
    })
  }
  ngOnInit(): void {
  }

  editBook(form: NgForm) {
    this.bookService.updateData(form.value)
      .subscribe(response => {
        if (!response.error) {
          console.log('edit form value', form.value);
          console.log(response);
          this.message = 'Book Updated SuccessFully'
          alert('Book Sucessfully Updated');
          form.reset();
          this.router.navigateByUrl('/booksInfo');
        } else {
          alert('Book Not Updated');
          this.router.navigateByUrl('/booksInfo');
        }
      }, error => {
        console.log(error);
      });
  }


}
