import { Component } from '@angular/core';
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuItem,
    HeaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
