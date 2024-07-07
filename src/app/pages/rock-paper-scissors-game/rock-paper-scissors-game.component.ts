import { Component, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';
import { MoveEnum } from '../../enum/move.enum';
import { GameRepositoryService } from '../../api/services/game-repository.service';
import { GameRequestModel } from '../../models/game-request.model';
import { GameResult } from '../../models/game-result.model';
import { ResultEnum } from '../../enum/result.enum';
import { HandComponent } from '../../components/hand/hand.component';
import { MatDialog } from '@angular/material/dialog';
import { CloseGameDialogComponent } from '../../components/close-game-dialog/close-game-dialog.component';
import { GameEndResultDialogComponent } from '../../components/game-end-result-dialog/game-end-result-dialog.component';

@Component({
  selector: 'app-rock-paper-scissors-game',
  templateUrl: './rock-paper-scissors-game.component.html',
  styleUrls: ['./rock-paper-scissors-game.component.scss']
})
export class RockPaperScissorsGameComponent {
  playerMove: MoveEnum = MoveEnum.PAPER;
  computerMove: MoveEnum = MoveEnum.PAPER;

  nextPlayerMove: MoveEnum | null = null;

  disablePlayButton: boolean = true;
  disableTooltip: boolean = false;

  @ViewChild('playerHearts') playerHearts!: HandComponent;
  @ViewChild('computerHearts') computerHearts!: HandComponent;

  @ViewChild('playerHand') playerHand!: HandComponent;
  @ViewChild('computerHand') computerHand!: HandComponent;

  constructor(
    public gameService: GameService,
    private gameRepositoryService: GameRepositoryService,
    private dialog: MatDialog
  ) {}

  onMoveSelect(move: MoveEnum) {
    this.nextPlayerMove = move;
    this.disablePlayButton = false;
    this.disableTooltip = true;
  }

  play() {
    this.playerHand.triggerAnimation();
    this.computerHand.triggerAnimation();
    this.disablePlayButton = true;
    if (this.nextPlayerMove) {
      this.#playApi(this.nextPlayerMove);
    }
  }

  #playApi(move: MoveEnum) {
    let gameRequest = new GameRequestModel(move);
    this.gameRepositoryService.play(gameRequest).subscribe((gameResult: GameResult) => {
      this.#handleGameResult(gameResult);
    });
  }

  #handleGameResult(gameResult: GameResult) {
    this.#triggerAnimations(gameResult);

    switch (gameResult.result) {
      case ResultEnum.WIN:
        setTimeout(() => {
          this.computerHearts.triggerAnimation();
          this.gameService.subtractComputerLife();
        }, 1000);
        break;
      case ResultEnum.LOSE:
        setTimeout(() => {
          this.playerHearts.triggerAnimation();
          this.gameService.subtractPlayerLife();
        }, 1000);
        break;
      case ResultEnum.DRAW:
        return;
      default:
        return;
    }
  }

  #triggerAnimations(gameResult: GameResult) {
    setTimeout(() => {
      this.playerMove = gameResult.userMove;
      this.computerMove = gameResult.computerMove;
    }, 1000);
    setTimeout(() => {
      if (this.#doGameHasEnded()) {
        this.#openGameEndResultDialog();
        return;
      }
      this.disablePlayButton = false;
    }, 2000);
  }

  openFinishGameDialog() {
    this.dialog.open(CloseGameDialogComponent, { disableClose: true });
  }

  #doGameHasEnded(): boolean {
    return this.gameService.livesComputer === 0 || this.gameService.livesPlayer === 0;
  }

  #openGameEndResultDialog() {
    this.dialog.open(GameEndResultDialogComponent, { disableClose: true });
  }
}
