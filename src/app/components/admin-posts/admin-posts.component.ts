import { Component } from '@angular/core';
import { AdminSidePanelComponent } from "../admin-side-panel/admin-side-panel.component";

@Component({
  selector: 'app-admin-posts',
  standalone: true,
  imports: [
    AdminSidePanelComponent
  ],
  templateUrl: './admin-posts.component.html',
  styleUrl: './admin-posts.component.css'
})
export class AdminPostsComponent {

}
