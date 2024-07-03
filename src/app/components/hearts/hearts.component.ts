import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.scss']
})
export class HeartsComponent {
  height: number = 50;
  width: number = 50;

  constructor(public gameService: GameService) {}
}
