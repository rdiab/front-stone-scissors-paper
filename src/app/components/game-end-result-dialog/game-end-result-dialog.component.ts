import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-end-result-dialog',
  templateUrl: './game-end-result-dialog.component.html',
  styleUrls: ['./game-end-result-dialog.component.scss']
})
export class GameEndResultDialogComponent implements OnInit {
  victory: string = '🏆 VICTORY 🏆';
  lose: string = '☠️ YOU LOSE ☠️';
  title: string = this.victory;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.#setTextBasedOnResult();
  }

  #setTextBasedOnResult() {
    if (this.gameService.livesComputer === 0) {
      this.title = this.victory;
      return;
    }
    if (this.gameService.livesPlayer === 0) {
      this.title = this.lose;
    }
  }
}
