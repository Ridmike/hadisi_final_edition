import {Component, OnInit} from '@angular/core';
import { AdminSidePanelComponent } from "../admin-side-panel/admin-side-panel.component";
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import {TagModule} from "primeng/tag";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {CategoriesService} from "../../services/categories/categories.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    AdminSidePanelComponent,
    ChartModule,
    TableModule,
    TagModule,
    RatingModule,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.catService.getCatsMini().then((data) => {
      this.products = data;
    });
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'inventoryStatus', header: 'Status' },
      { field: 'rating', header: 'Rating' }
    ];

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Users',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Memberships',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
  products!: any[];
  cols!: { field: string, header: string }[];


  constructor(private catService: CategoriesService) {}

  getSeverity(status: string | undefined){
    if (!status) {
      return 'info'; // Handle undefined or null cases
    }
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info'; // Default for unknown statuses
    }
  }



}
