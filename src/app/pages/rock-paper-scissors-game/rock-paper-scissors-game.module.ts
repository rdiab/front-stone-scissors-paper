import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RockPaperScissorsGameComponent } from './rock-paper-scissors-game.component';
import { RockPaperScissorsGameRoutingModule } from './rock-paper-scissors-game-routing.module';

@NgModule({
  declarations: [RockPaperScissorsGameComponent],
  imports: [CommonModule, RockPaperScissorsGameRoutingModule],
  exports: [RockPaperScissorsGameComponent]
})
export class RockPaperScissorsGameModule {}
