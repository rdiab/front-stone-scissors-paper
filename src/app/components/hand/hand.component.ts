import { Component, Input } from '@angular/core';
import { MoveEnum } from '../../enum/move.enum';

export interface MovesInterface {
  paper: MoveEnum;
  stone: MoveEnum;
  scissors: MoveEnum;
}

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent {
  @Input()
  move!: MoveEnum;

  @Input()
  isUser!: boolean;

  moves: MovesInterface = { paper: MoveEnum.PAPER, stone: MoveEnum.STONE, scissors: MoveEnum.SCISSORS };

  height: number = 200;
  width: number = 200;

  constructor() {}
}
