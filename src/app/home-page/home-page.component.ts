import {Component} from '@angular/core';
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuItem,
    NavbarComponent,
    DatePipe
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


  protected currentDate = new Date();

}
