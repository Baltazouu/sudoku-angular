import {Component} from '@angular/core';
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {DatePipe} from "@angular/common";
import {StreakDayComponent} from "../../components/streak-day/streak-day.component";

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


  protected currentDate = new Date();

  /**
   * Use data from API Call but not available yet
   */
  getLastSevenDays(): Date[] {
    const lastSevenDays: Date[] = [];

    for (let i = 6; i > -1; i--) {
      const pastDate = new Date();
      pastDate.setDate(this.currentDate.getDate() - i);
      lastSevenDays.push(pastDate)
    }

    return lastSevenDays;
  }


}
