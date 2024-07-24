import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    PaginatorModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  email: string = '';
  password: string = '';
  firstname: string = '';
  confirmpaswoard: string = '';

  ngOnInit(): void {
  }

}
