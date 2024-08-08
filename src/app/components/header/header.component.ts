import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {LoginComponent} from "../login/login.component";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    LoginComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  logo: string = 'public/images/logo.png';

  sideBarChange = false;

  sideBarFunc(){
    this.sideBarChange = !this.sideBarChange;
  }


}
