import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class HandComponent implements OnInit, OnChanges {
  @Input() move!: MoveEnum;
  @Input() isUser!: boolean;

  moves: MovesInterface = { paper: MoveEnum.PAPER, stone: MoveEnum.STONE, scissors: MoveEnum.SCISSORS };

  height: number = 320;
  width: number = 320;

  currentMove: MoveEnum | null = null;
  animateHand: boolean = false;

  innerWidth: number = 0;

  constructor() {}

  ngOnInit() {
    this.#adjustHandSize();
  }

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

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.#adjustHandSize();
  }

  #adjustHandSize() {
    this.innerWidth = window.innerWidth;

    const minSize = 100;
    const maxSize = 280;
    const minWidth = 320; // Minimum screen width for maximum hand size
    const maxWidth = 1280; // Maximum screen width for minimum hand size

    const size = Math.max(
      minSize,
      Math.min(maxSize, ((this.innerWidth - minWidth) / (maxWidth - minWidth)) * (maxSize - minSize) + minSize)
    );

    this.height = size;
    this.width = size;
  }
}
