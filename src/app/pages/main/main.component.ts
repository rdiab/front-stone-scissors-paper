import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Subject, takeUntil } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  livesForm: FormControl<number | null> = new FormControl<number | null>(3);
  lives: number[] = [1, 2, 3, 4, 5];
  destroy$: Subject<void> = new Subject<void>();

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.#onLivesFormChange();
  }

  #onLivesFormChange() {
    this.livesForm.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        map((value) => Number(value))
      )
      .subscribe((lives) => {
        this.gameService.setLivesToAllPlayers(lives);
      });
  }
}
