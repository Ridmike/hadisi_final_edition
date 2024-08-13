import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";
import {CommonModule, NgClass, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {AccordionModule} from "primeng/accordion";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-post-ad-cat',
  standalone: true,
  imports: [
    NgForOf,
    AccordionModule,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    NgClass
  ],
  templateUrl: './post-ad-cat.component.html',
  styleUrl: './post-ad-cat.component.css'
})
export class PostAdCatComponent {
  constructor(private categoriesService:CategoriesService, private route: Router) {
  }

  catList = this.categoriesService.tempCategories

  activeCategoryId: number | null = null;

  toggleAccordion(categoryId: number) {
    this.activeCategoryId = this.activeCategoryId === categoryId ? null : categoryId;
  }

  isActive(categoryId: number): boolean {
    return this.activeCategoryId === categoryId;
  }

  startForm() {
    this.route.navigate(['/form']);
  }
}
