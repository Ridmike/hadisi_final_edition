import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {CategoriesService} from "../../services/categories/categories.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private homeCategories:CategoriesService) {
}                                                 //----------------this is home category section-----------------------

  catHome = this.homeCategories.tempCategories               //----------------this is home category section-----------------------

}
