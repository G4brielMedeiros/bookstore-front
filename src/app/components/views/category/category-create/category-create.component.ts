import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.category).subscribe((response) => {
      this.router.navigate(['categories']);
      this.service.messsage('Category successfully created!');

    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.messsage(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['categories'])
  }

}
