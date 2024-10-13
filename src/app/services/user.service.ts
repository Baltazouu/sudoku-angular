import { Injectable } from '@angular/core';
import {User} from "../model/user.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {LocalStorageService} from "./local-storage.service";

@Injectable({providedIn: 'root'})
export class UserService {

  private userSubject = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.userSubject.asObservable();

  constructor(private http:HttpClient,
              private localStorageService:LocalStorageService) {

    const login = this.localStorageService.getItem('login');
    if (login) {
      // set current user with id 1
      this.findById(1).subscribe(
        user => {this.userSubject.next(user);})}
  }

  login(login: string, password: string): boolean {
    if (login === password) {
      this.localStorageService.setItem('login', login);
      // set current user with id 1
      this.findById(1).subscribe(user => {this.userSubject.next(user);})
      return true;
    }
    return false;
  }

  logout(): void {
    this.localStorageService.removeItem('login');
    this.userSubject.next(undefined);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${ConfigService.API_URL}/users`);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${ConfigService.API_URL}/users/${id}`);
  }


}
