import { MoveEnum } from '../../enum/move.enum';
import { ResultEnum } from '../../enum/result.enum';

export interface GameResultDtoInterface {
  userMove: MoveEnum;
  computerMove: MoveEnum;
  result: ResultEnum;
}
