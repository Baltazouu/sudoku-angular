import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../components/navbar/navbar.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {SudokuRowComponent} from "../components/sudoku-row/sudoku-row.component";
import {SudokuService} from "../service/sudoku.service";
import {SudokuGrid} from "../model/sudoku-grid.interface";
import {Observable} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

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

  // protected sudokuGrid: number[][] = [
  //   [5, 3, 0, 0, 7, 0, 0, 0, 0],
  //   [6, 0, 0, 1, 9, 5, 0, 0, 0],
  //   [0, 9, 8, 0, 0, 0, 0, 6, 0],
  //   [8, 0, 0, 0, 6, 0, 0, 0, 3],
  //   [4, 0, 0, 8, 0, 3, 0, 0, 1],
  //   [7, 0, 0, 0, 2, 0, 0, 0, 6],
  //   [0, 6, 0, 0, 0, 0, 2, 8, 0],
  //   [0, 0, 0, 4, 1, 9, 0, 0, 5],
  //   [0, 0, 0, 0, 8, 0, 0, 7, 9]
  // ];

  ngOnInit(): void {
    this.sudokuGrid$ = this.sudokuService.findSudokuGrid()
  }

}
