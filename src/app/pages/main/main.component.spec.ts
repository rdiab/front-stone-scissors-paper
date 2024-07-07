import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { GameService } from '../../services/game.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let gameService: GameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [GameService]
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    gameService = TestBed.inject(GameService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected lives from livesForm', () => {
    const lives = 4;
    component.livesForm.setValue(lives);
    expect(gameService.livesPlayer).toEqual(lives);
    expect(gameService.livesComputer).toEqual(lives);
  });
});
