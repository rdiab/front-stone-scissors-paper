import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseGameDialogComponent } from './close-game-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CloseGameDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterLink, MatIconModule],
  exports: [CloseGameDialogComponent]
})
export class CloseGameDialogModule {}
