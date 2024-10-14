import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sudoku-row',
  standalone: true,
  imports: [],
  templateUrl: './sudoku-row.component.html',
  styleUrl: './sudoku-row.component.scss'
})
export class SudokuRowComponent implements OnInit{

  @Input({required:true}) row: number[] = [];

  originalRow: number[] = []

  ngOnInit(){
    this.originalRow = this.row.slice();
  }




}
