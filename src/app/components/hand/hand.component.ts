import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MoveEnum } from '../../enum/move.enum';

export interface MovesInterface {
  paper: MoveEnum;
  stone: MoveEnum;
  scissors: MoveEnum;
}

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss', '../../animations/hand-animation.scss']
})
export class HandComponent implements OnChanges {
  @Input() move!: MoveEnum;
  @Input() isUser!: boolean;

  moves: MovesInterface = { paper: MoveEnum.PAPER, stone: MoveEnum.STONE, scissors: MoveEnum.SCISSORS };

  height: number = 200;
  width: number = 200;

  currentMove: MoveEnum | null = null;
  animateHand: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['move'] && !changes['move'].firstChange) {
      this.currentMove = this.move;
    }
  }

  triggerAnimation() {
    this.animateHand = true;
    setTimeout(() => {
      this.animateHand = false;
    }, 1000);
  }
}
