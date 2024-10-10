import { Injectable } from '@angular/core';
import {User} from "../model/user.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

    const login = localStorage.getItem('login');
    if (login) {
      this.user = {login, password: login,streak:0,points:0};
    }
  }

  user : User | null = null;

  login(login: string, password: string): boolean {
    if (login === password) {
      localStorage.setItem('login', login);
      this.user = {login, password, streak:0,points:0};
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
