import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-admin-side-panel',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon
  ],
  templateUrl: './admin-side-panel.component.html',
  styleUrl: './admin-side-panel.component.css'
})
export class AdminSidePanelComponent {


}
