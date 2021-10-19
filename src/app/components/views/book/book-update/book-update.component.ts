import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id_cat: String = ''

  book: Book = {
    id:     '',
    title:  '',
    author: '',
    text:   ''
  }

  title   = new FormControl('',[Validators.minLength(3)])
  author  = new FormControl('',[Validators.minLength(3)])
  text    = new FormControl('',[Validators.minLength(10)])

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.book.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }



  cancel(): void {
    this.router.navigate([`categories/${this.id_cat}/books`]);
  }

  findById(): void {
    this.service.findbyId(this.book.id!).subscribe((response) => {
      this.book = response
    })
  }

  update(): void {
    this.service.update(this.book).subscribe((response) => {
      this.router.navigate([`categories/${this.id_cat}/books`]);
      this.service.messsage("Book successfuly updated.")
    }, err => {
      this.router.navigate([`categories/${this.id_cat}/books`]);
      this.service.messsage('Failed to update book. Please try again later.')
    })
  }

  getMessageTitle() {
    if(this.title.invalid) {
      return 'Title must be between 3 and 100 characters.'
    }
    return false;
  }

  getMessageAuthor() {
    if(this.author.invalid) {
      return 'Author name must be between 3 and 100 characters.'
    }
    return false;
  }

  getMessageText() {
    if(this.text.invalid) {
      return 'Text must be between 3 and 100 characters.'
    }

    return false;
  }

  isValid(): boolean {
    if( this.text.invalid || this.author.invalid || this.title.invalid ){
      return false;
    }

    return true;
    
  }


}
