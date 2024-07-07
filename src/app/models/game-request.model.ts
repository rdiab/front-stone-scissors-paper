import { MoveEnum } from '../enum/move.enum';

export class GameRequestModel {
  userMove: MoveEnum;

  constructor(userMove: MoveEnum) {
    this.userMove = userMove;
  }
}
