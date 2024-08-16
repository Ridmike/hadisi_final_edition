import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  constructor(private userDetails:UserService){

  }

  userData = this.userDetails.userList

}
