import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatAnchor
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
