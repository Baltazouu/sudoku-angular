import { Injectable } from '@angular/core';
import {User} from "../model/user.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User | undefined;

  constructor(private http:HttpClient) {

    const login = localStorage.getItem('login');
    if (login) {
      // set current user with id 1
      this.findById(1).subscribe(user => {
        this.user = user;
      })
    }
  }

  login(login: string, password: string): boolean {
    if (login === password) {
      localStorage.setItem('login', login);
      // set current user with id 1
      this.findById(1).subscribe(user => {
        this.user = user;
      })
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('login');
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${ConfigService.API_URL}/users`);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${ConfigService.API_URL}/users/${id}`);
  }


}
