import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RockPaperScissorsGameComponent } from './rock-paper-scissors-game.component';

const routes: Routes = [
  {
    path: '',
    component: RockPaperScissorsGameComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RockPaperScissorsGameRoutingModule {}
