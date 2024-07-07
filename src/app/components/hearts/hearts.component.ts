import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.scss', '../../animations/heart-animation.scss']
})
export class HeartsComponent implements OnInit {
  @Input()
  lives: number = 3;

  height: number = 50;
  width: number = 50;

  animateHeart: boolean = false;

  innerWidth: number = 0;

  constructor() {}

  ngOnInit() {
    this.#adjustHandSize();
  }

  triggerAnimation() {
    this.animateHeart = true;
    setTimeout(() => {
      this.animateHeart = false;
    }, 1000);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.#adjustHandSize();
  }

  #adjustHandSize() {
    this.innerWidth = window.innerWidth;

    const minSize = 30;
    const maxSize = 50;
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
