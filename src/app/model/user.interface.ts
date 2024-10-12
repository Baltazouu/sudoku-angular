import {Streak} from "./streak";

export interface User {
  id:number;
  login:string;
  password:string;
  streak:number;
  points:number;
  streaks:Streak[];
}
