import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import {NgForOf, NgIf} from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    NgForOf,
    HeaderComponent,
    FooterComponent,
    NgIf
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  constructor(private userDetails:UserService){
  }
  userData = this.userDetails.userList

  isPopupVisible = false;

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
