import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {

}
