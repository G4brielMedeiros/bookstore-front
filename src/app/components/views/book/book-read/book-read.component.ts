import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  id_cat: String = ''

  book: Book = {
    id:     '',
    title:  '',
    author: '',
    text:   ''
  }



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


}
