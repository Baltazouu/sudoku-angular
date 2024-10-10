import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SudokuGrid} from "../model/sudoku-grid.interface";
import {Observable} from "rxjs";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor(private readonly http:HttpClient) { }

  findSudokuGrid() : Observable<SudokuGrid>{
    return this.http.get<SudokuGrid>(ConfigService.API_SUDOKU_URL + "/sudoku");
  }

}
