import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sudoku-row',
  standalone: true,
  imports: [],
  templateUrl: './sudoku-row.component.html',
  styleUrl: './sudoku-row.component.scss'
})
export class SudokuRowComponent {

  protected i = 0;

  @Input({required:true}) row: number[] = [];


}
