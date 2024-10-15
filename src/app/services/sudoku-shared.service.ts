import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {SudokuCell} from "../model/sudoku-cell";

@Injectable({
  providedIn: 'root'
})
export class SudokuSharedService {

  private gridSubject = new BehaviorSubject<SudokuCell[][]>([]);

  updateGrid(grid:SudokuCell[][]){
    this.gridSubject.next(grid);
  }

  getGrid() : Observable<SudokuCell[][]>{
    return this.gridSubject.asObservable();
  }
}
