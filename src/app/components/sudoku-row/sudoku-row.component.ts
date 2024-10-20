import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SudokuCell} from "../../model/sudoku-cell";
import {FormsModule} from "@angular/forms";
import {SudokuSharedService} from "../../services/sudoku-shared.service";
import {NgClass} from "@angular/common";
import {CellClass} from "../../model/cell-class";

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

  protected sudokuRow : SudokuCell[] = [];
  protected cellClasses: CellClass[] = [];

  @Output() valueChange = new EventEmitter<{rowIndex:number,index:number,value:number}>();

  constructor(private sudokuSharedService:SudokuSharedService) {
  }

  ngOnInit() : void {
    this.sudokuSharedService.getGrid().subscribe((grid:SudokuCell[][])=>{
      this.sudokuRow = grid[this.rowIndex];
      this.sudokuRow.forEach((cell, index) => {
        this.cellClasses[index] = this.getCellClass(cell);
      });
    });
  }

  onValueChange(index:number,value:number|undefined) : void{
    if(value){
      this.valueChange.emit({rowIndex:this.rowIndex,index:index,value:value});
    }
  }

  private getCellClass(cell: SudokuCell) : CellClass {
    return {
      'sudoku-cell': true,
      'bold': !cell.isOriginal,
      'correct': cell.isCorrect && !cell.isOriginal,
      'incorrect': ((cell.value && cell.value > 0) && (!cell.isCorrect && !cell.isOriginal))
    };
  }
}
