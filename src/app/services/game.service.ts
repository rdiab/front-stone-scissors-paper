import { Injectable } from '@angular/core';
import { MoveEnum } from '../enum/move.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  livesPlayer: number = 3;
  livesComputer: number = 3;

  moves: MoveEnum[] = [MoveEnum.STONE, MoveEnum.SCISSORS, MoveEnum.PAPER];

  constructor() {}

  setLivesToAllPlayers(lives: number) {
    this.livesPlayer = lives;
    this.livesComputer = lives;
  }

  subtractPlayerLife() {
    this.livesPlayer--;
  }

  subtractComputerLife() {
    this.livesComputer--;
  }

  resetGame() {
    this.livesPlayer = 3;
    this.livesComputer = 3;
  }
}
