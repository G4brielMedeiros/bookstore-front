import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

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
  }

  create(): void {
    this.service.create(this.book, this.id_cat).subscribe(response => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      this.service.messsage('Book sucessfully created.')
    }, err => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      this.service.messsage('Error trying to create new book. Please try again later.')

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
