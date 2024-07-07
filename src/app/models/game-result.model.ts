import { GameResultDtoInterface } from '../api/interfaces/game-result-dto.interface';
import { MoveEnum } from '../enum/move.enum';
import { ResultEnum } from '../enum/result.enum';

export class GameResult implements GameResultDtoInterface {
  userMove: MoveEnum;
  computerMove: MoveEnum;
  result: ResultEnum;

  constructor(gameResult: GameResultDtoInterface) {
    this.userMove = gameResult.userMove;
    this.computerMove = gameResult.computerMove;
    this.result = gameResult.result;
  }
}
