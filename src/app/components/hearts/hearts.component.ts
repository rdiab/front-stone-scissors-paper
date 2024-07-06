import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.scss', '../../animations/heart-animation.scss']
})
export class HeartsComponent {
  @Input()
  lives: number = 3;

  height: number = 50;
  width: number = 50;

  animateHeart: boolean = false;

  constructor() {}

  triggerAnimation() {
    this.animateHeart = true;
    setTimeout(() => {
      this.animateHeart = false;
    }, 1000);
  }
}
