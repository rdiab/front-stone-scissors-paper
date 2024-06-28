import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HandModule } from '../../components/hand/hand.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, HandModule],
  exports: [MainComponent]
})
export class MainModule {}
