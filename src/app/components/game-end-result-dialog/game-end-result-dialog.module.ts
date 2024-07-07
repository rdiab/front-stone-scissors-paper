import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameEndResultDialogComponent } from './game-end-result-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GameEndResultDialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, RouterLink, MatIconModule],
  exports: [GameEndResultDialogComponent]
})
export class GameEndResultDialogModule {}
