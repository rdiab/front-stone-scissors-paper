import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorsGameComponent } from './rock-paper-scissors-game.component';

describe('RockPaperScissorsGameComponent', () => {
  let component: RockPaperScissorsGameComponent;
  let fixture: ComponentFixture<RockPaperScissorsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockPaperScissorsGameComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RockPaperScissorsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
