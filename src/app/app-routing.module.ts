import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./pages/rock-paper-scissors-game/rock-paper-scissors-game.module').then(
        (m) => m.RockPaperScissorsGameModule
      )
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
