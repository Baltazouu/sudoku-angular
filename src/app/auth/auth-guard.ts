import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(protected readonly router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    const login = localStorage.getItem('login');

    if (login) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
