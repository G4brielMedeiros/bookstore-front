import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/views/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/views/category/category-delete/category-delete.component';
import { CategoryReadComponent } from './components/views/category/category-read/category-read.component';
import { CategoryUpdateComponent } from './components/views/category/category-update/category-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "categories",
    component: CategoryReadComponent
  },
  {
    path: "categories/create",
    component: CategoryCreateComponent
  },
  {
    path: "categories/delete/:id",
    component: CategoryDeleteComponent
  },
  {
    path: "categories/update/:id",
    component: CategoryUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
