import { Component } from '@angular/core';
import { AdminSidePanelComponent } from "../admin-side-panel/admin-side-panel.component";

@Component({
  selector: 'app-admin-cat',
  standalone: true,
  imports: [
    AdminSidePanelComponent
  ],
  templateUrl: './admin-cat.component.html',
  styleUrl: './admin-cat.component.css'
})
export class AdminCatComponent {

}
