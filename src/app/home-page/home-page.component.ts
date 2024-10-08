import {Component} from '@angular/core';
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {NavbarComponent} from "../components/navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuItem,
    NavbarComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
