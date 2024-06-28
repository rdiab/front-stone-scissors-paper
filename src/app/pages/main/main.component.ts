import { Component } from '@angular/core';
import { MoveEnum } from '../../enum/move.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // TODO: Delete this. Is here just for testing
  moveUser = MoveEnum.PAPER;

  constructor() {}
}
