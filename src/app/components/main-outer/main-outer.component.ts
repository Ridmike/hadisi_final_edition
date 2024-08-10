import { Component } from '@angular/core';
import {SidePanelComponent} from "../side-panel/side-panel.component";
import {AdsPanelComponent} from "../ads-panel/ads-panel.component";
import {FooterComponent} from "../footer/footer.component";
import {FloatBtnComponent} from "../float-btn/float-btn.component";
import {MatIcon} from "@angular/material/icon";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-main-outer',
  standalone: true,
  imports: [
    SidePanelComponent,
    AdsPanelComponent,
    FooterComponent,
    FloatBtnComponent,
    MatIcon,
    NgStyle
  ],
  templateUrl: './main-outer.component.html',
  styleUrl: './main-outer.component.css'
})
export class MainOuterComponent {

}
