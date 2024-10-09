
export interface SudokuGrid {

  ame: string;
  created_by: string;
  info: string;
  data: number[][];
  easy: number[][];
  medium: number[][];
  hard: number[][];
  date: string;
  rules: string[];
  difficulty: string[];
  projects: Project[];
  usefullinks: UsefulLink[];

}

interface Project {
  title: string;
  url: string;
}

interface UsefulLink {
  title: string;
  url: string;
}


