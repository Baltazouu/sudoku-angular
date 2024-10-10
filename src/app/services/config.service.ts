import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public static readonly API_URL = ' https://664ba07f35bbda10987d9f99.mockapi.io/api';

  public static readonly API_SUDOKU_URL = 'https://sudoku-game-and-api.netlify.app/api/sudoku';

}