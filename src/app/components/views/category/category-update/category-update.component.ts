import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "../category.model";
import { CategoryService } from "../category.service";

@Component({
  selector: "app-category-update",
  templateUrl: "./category-update.component.html",
  styleUrls: ["./category-update.component.css"],
})
export class CategoryUpdateComponent implements OnInit {
  category: Category = {
    id: "",
    name: "",
    description: "",
  };

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe((response) => {
      this.category = response;
    });
  }

  update(): void {
    this.service.update(this.category).subscribe((response) => {
      this.router.navigate(['categories'])
      this.service.messsage('Cateogry successfully updated.')
    }, err => {
      console.log(err)
      this.service.messsage('Please make sure all fields are filled correctly.')
    })
  }

  cancel(): void {
    this.router.navigate(['categories'])
  }
}
