import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartsComponent } from './hearts.component';

@NgModule({
  declarations: [HeartsComponent],
  imports: [CommonModule],
  exports: [HeartsComponent]
})
export class HeartsModule {}
