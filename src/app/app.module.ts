import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./components/views/home/home.component";
import { MatCardModule} from '@angular/material/card';
import { CategoryReadComponent } from './components/views/category/category-read/category-read.component';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { CategoryCreateComponent } from './components/views/category/category-create/category-create.component';
import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";





@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent, CategoryReadComponent, CategoryCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
