import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SudokuCell} from "../../model/sudoku-cell";
import {FormsModule} from "@angular/forms";
import {SudokuSharedService} from "../../services/sudoku-shared.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-sudoku-row',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './sudoku-row.component.html',
  styleUrl: './sudoku-row.component.scss'
})
export class SudokuRowComponent implements OnInit {

  @Input({required:true}) rowIndex:number = 0;

  protected sudokuRow : SudokuCell[] = []

  @Output() valueChange = new EventEmitter<{rowIndex:number,index:number,value:number}>();

  constructor(private sudokuSharedService:SudokuSharedService) {
  }

  ngOnInit() {
    this.sudokuSharedService.getGrid().subscribe((grid:SudokuCell[][])=>{
      this.sudokuRow = grid[this.rowIndex];
    })
  }

  onValueChange(index:number,value:number|undefined){
    if(value){
      this.valueChange.emit({rowIndex:this.rowIndex,index:index,value:value});
    }
  }

  getCellClass(cell: SudokuCell) {
    return {
      'sudoku-cell': true,
      'bold': !cell.isOriginal,
      'correct': cell.isCorrect && !cell.isOriginal,
    };
  }
}
