import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-streak-day',
  standalone: true,
  imports: [
    DatePipe,
    MatIcon
  ],
  templateUrl: './streak-day.component.html',
  styleUrl: './streak-day.component.scss'
})
export class StreakDayComponent {

  @Input({required:true}) streakDay:string | undefined;

  @Input({required:true}) currentDate:Date | undefined;

  @Input({required:true}) isPlayed:boolean | undefined;


}
