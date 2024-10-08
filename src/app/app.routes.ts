import { Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AuthGuard} from "./auth/auth-guard";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {RankingPageComponent} from "./ranking-page/ranking-page.component";

export const routes: Routes = [

  {path:'', component:HomePageComponent, canActivate: [AuthGuard] },
  {path:'login', component:LoginPageComponent},
  {path:'rankings', component: RankingPageComponent, canActivate: [AuthGuard]},
  {path:'**', component:NotFoundPageComponent},

];
