import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatAnchor } from "@angular/material/button";

//Assets

//Components
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor,
    NavbarComponent
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {

}
