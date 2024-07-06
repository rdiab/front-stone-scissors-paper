import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RockPaperScissorsGameComponent } from './rock-paper-scissors-game.component';
import { RockPaperScissorsGameRoutingModule } from './rock-paper-scissors-game-routing.module';
import { HeartsModule } from '../../components/hearts/hearts.module';
import { HandModule } from '../../components/hand/hand.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [RockPaperScissorsGameComponent],
  imports: [
    CommonModule,
    RockPaperScissorsGameRoutingModule,
    HeartsModule,
    HandModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [RockPaperScissorsGameComponent]
})
export class RockPaperScissorsGameModule {}
