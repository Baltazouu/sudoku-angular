import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameResult} from "../model/game-result";
import {Observable} from "rxjs";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class GameResultService {

  constructor(private http:HttpClient) {

  }

  sendGameResult(gameResult:GameResult) : Observable<GameResult>{
    return this.http.post<GameResult>(ConfigService.API_URL + '/game',gameResult)
  }
}
