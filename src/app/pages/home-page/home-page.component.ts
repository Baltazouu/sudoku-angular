import {Component} from '@angular/core';
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {AsyncPipe, DatePipe} from "@angular/common";
import {StreakDayComponent} from "../../components/streak-day/streak-day.component";
import {UserService} from "../../services/user.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuItem,
    NavbarComponent,
    DatePipe,
    StreakDayComponent,
    AsyncPipe,
    MatProgressSpinner
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  protected currentDate:Date = new Date();

  protected user$ = this.userService.user$;

  constructor(private readonly userService:UserService) {
  }

}
