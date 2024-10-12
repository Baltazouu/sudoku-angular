import {Component} from '@angular/core';
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {DatePipe} from "@angular/common";
import {StreakDayComponent} from "../../components/streak-day/streak-day.component";
import {UserService} from "../../services/user.service";
import {Streak} from "../../model/streak";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuItem,
    NavbarComponent,
    DatePipe,
    StreakDayComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  protected currentDate:Date = new Date();

  protected streaks:Streak[] = [];

  constructor(private readonly userService:UserService) {
    this.streaks = this.userService.user?.streaks || [];
  }

}
