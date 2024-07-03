import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './pages/main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { RockPaperScissorsGameRoutingModule } from './pages/rock-paper-scissors-game/rock-paper-scissors-game-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MainModule, HttpClientModule, RockPaperScissorsGameRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
