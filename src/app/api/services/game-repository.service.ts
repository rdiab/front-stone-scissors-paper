import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameRequestModel } from '../../models/game-request.model';
import { environment } from '../../../environments/environment';
import { GameResultDtoInterface } from '../interfaces/game-result-dto.interface';
import { map, Observable } from 'rxjs';
import { GameResult } from '../../models/game-result.model';

@Injectable({
  providedIn: 'root'
})
export class GameRepositoryService {
  constructor(private http: HttpClient) {}

  play(gameRequest: GameRequestModel): Observable<GameResult> {
    let url = environment.restGame.url + environment.restGame.play;
    return this.http
      .post<GameResultDtoInterface>(url, gameRequest)
      .pipe(map((gameResultDto: GameResultDtoInterface) => new GameResult(gameResultDto)));
  }
}
