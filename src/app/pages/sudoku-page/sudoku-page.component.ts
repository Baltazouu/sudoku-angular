import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit
} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {SudokuRowComponent} from "../../components/sudoku-row/sudoku-row.component";
import {SudokuService} from "../../services/sudoku.service";
import {SudokuGrid} from "../../model/sudoku-grid.interface";
import {catchError, of} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {defaultGrid} from "../../data/default-grid";
import {HttpErrorResponse} from "@angular/common/http";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage
} from "@angular/material/card";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {SudokuCell} from "../../model/sudoku-cell";
import {SudokuSharedService} from "../../services/sudoku-shared.service";
import {GameResultService} from "../../services/game-result.service";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

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
    MatProgressSpinner,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    DatePipe,
    MatCardImage,
    MatCardFooter,
    MatChipSet,
    MatChip,
    NgOptimizedImage,
    NgxSkeletonLoaderModule,
    MatSelect,
    MatOption,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sudoku-page.component.html',
  styleUrl: './sudoku-page.component.scss'
})
export class SudokuPageComponent implements OnInit{

  protected sudokuGrid:SudokuGrid|undefined;

  protected gridFilledByUser: SudokuCell[][] = []

  protected checkNumber:number = 0;

  protected gridLevel = "easy";

  protected currentDate:Date = new Date();

  isGridCorrect:boolean = false;

  isGridSent:boolean = false;

  constructor(private sudokuService:SudokuService,
              private sudokuSharedService:SudokuSharedService,
              private gameResultService:GameResultService) { }

  ngOnInit(): void {
    this.sudokuService.findSudokuGrid().pipe(
      catchError((err : HttpErrorResponse) =>{
        console.log(err.message);
        return of(defaultGrid)
      })
    ).subscribe((grid:SudokuGrid) => {
        this.sudokuGrid = grid;
        this.setGridByDifficulty();
        this.sudokuSharedService.updateGrid(this.gridFilledByUser);
      })
  }

  onValueChange(event:{rowIndex:number,index:number,value:number}){
    this.gridFilledByUser[event.rowIndex][event.index].value = event.value;
  }

  checkGrid() {
    this.gridFilledByUser = this.gridFilledByUser.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        if (!cell.isOriginal) {
          cell.isCorrect = Number(cell.value) === this.sudokuGrid?.data[rowIndex][cellIndex];
        }
        return cell;
      });
    });
    this.sudokuSharedService.updateGrid(this.gridFilledByUser);
    this.isGridCorrect = this.gridFilledByUser.every(row => row.every(cell => cell.isCorrect));
    this.checkNumber++;
  }

  sendGameResult(){
    if(this.isGridCorrect){
      this.gameResultService.sendGameResult({
        date: this.currentDate,
        playerName: "Player",
        clues: this.checkNumber
      }).subscribe({
        next: () => {
          this.isGridSent = true;
      },
        error: (err) => {
          console.log(err.message);
        }
      });
    }
  }

  setGridByDifficulty(){
    console.log(this.gridLevel);
    let grid :number[][]|undefined;
    switch (this.gridLevel) {
      case "medium":
        grid = this.sudokuGrid?.medium
         break;
      case "hard":
        grid = this.sudokuGrid?.hard
        break;
      default: // easy
        grid = this.sudokuGrid?.easy
        break;
    }
    this.gridFilledByUser = grid?.map(row => row.map(cell => {
      return {
        isOriginal: cell !== 0,
        value: cell === 0 ? undefined : cell,
        isCorrect: cell != 0
      }
    })) || [];
    this.checkNumber = 0;
    this.sudokuSharedService.updateGrid(this.gridFilledByUser);
  }


}
