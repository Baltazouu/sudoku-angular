import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {UserService} from "../../services/user.service";
import {User} from "../../model/user.interface";
import {UserTableRankComponent} from "../../components/user-table-rank/user-table-rank.component";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: 'app-ranking-page',
  standalone: true,
  imports: [
    NavbarComponent,
    UserTableRankComponent,
    AsyncPipe,
    MatProgressSpinner,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.scss'
})
export class RankingPageComponent implements OnInit{

  users$: Observable<User[]> | undefined;

  constructor(private readonly userService: UserService) {
  }

  ngOnInit() : void {
    this.users$ = this.userService.findAll();
  }

}
