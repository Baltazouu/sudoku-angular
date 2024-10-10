import { Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthGuard } from "./auth/auth-guard";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { RankingPageComponent } from "./pages/ranking-page/ranking-page.component";
import { SudokuPageComponent } from "./pages/sudoku-page/sudoku-page.component";

export const routes: Routes = [

  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'sudoku', component: SudokuPageComponent, canActivate: [AuthGuard] },
  { path: 'rankings', component: RankingPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundPageComponent },

];
