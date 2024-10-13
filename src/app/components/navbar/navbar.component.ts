import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {UserService} from "../../services/user.service";
import {User} from "../../model/user.interface";
import {MatAnchor, MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {MatDrawerContainer} from "@angular/material/sidenav";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatDrawerContainer,
    MatMenuItem,
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    RouterLink,
    MatAnchor,
    MatProgressSpinner,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected user$ = this.userService.user$;

  constructor(private userService:UserService,
              private router:Router) {
  }

  logout() {
    this.userService.logout();
    return this.router.navigateByUrl('/login')
  }


}
