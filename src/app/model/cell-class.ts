export interface CellClass {
  'sudoku-cell': boolean;
  'bold': boolean;
  'correct': boolean;
  'incorrect': number | boolean | undefined;
}
