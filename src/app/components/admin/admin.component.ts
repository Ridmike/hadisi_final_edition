import { Component } from '@angular/core';
import { AdminSidePanelComponent } from "../admin-side-panel/admin-side-panel.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminSidePanelComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
