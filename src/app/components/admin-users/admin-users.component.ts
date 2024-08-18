import { Component } from '@angular/core';
import { AdminSidePanelComponent } from "../admin-side-panel/admin-side-panel.component";

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [
    AdminSidePanelComponent
  ],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {

}
