import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../components/navbar/navbar.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {SudokuRowComponent} from "../components/sudoku-row/sudoku-row.component";
import {SudokuService} from "../services/sudoku.service";
import {SudokuGrid} from "../model/sudoku-grid.interface";
import {catchError, Observable, of} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {defaultGrid} from "../data/default-grid";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sudoku-page',
  standalone: true,
  imports: [
    NavbarComponent,
    MatGridList,
    MatGridTile,
    NgClass,
    NgForOf,
    MatFormField,
    MatInput,
    SudokuRowComponent,
    AsyncPipe,
    MatProgressSpinner
  ],
  templateUrl: './sudoku-page.component.html',
  styleUrl: './sudoku-page.component.scss'
})
export class SudokuPageComponent implements OnInit{

  protected sudokuGrid$: Observable<SudokuGrid> | undefined

  constructor(private sudokuService:SudokuService) { }


  ngOnInit(): void {
    this.sudokuGrid$ = this.sudokuService.findSudokuGrid().pipe(
      catchError((err : HttpErrorResponse) =>{
        console.log("error while loading sudoku grid");
        return of(defaultGrid)
      })
    )
  }

}
