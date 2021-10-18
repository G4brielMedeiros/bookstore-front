import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.css']
})
export class BookReadAllComponent implements OnInit {

  displayedColumns: string[] = ["id", "title", "books", "actions"]

  id_cat: String = ''

  books: Book[] = []

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.findAll()
  }

  findAll(): void {
    this.service.findAllByCategory(this.id_cat).subscribe((response) => {
      this.books = response;
      console.log(this.books)
    })
  }

  goToBookCreate(): void {
    this.router.navigate([`categories/${this.id_cat}/books/create`])
  }

}
