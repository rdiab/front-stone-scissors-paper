import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEndResultDialogComponent } from './game-end-result-dialog.component';

describe('GameEndResultDialogComponent', () => {
  let component: GameEndResultDialogComponent;
  let fixture: ComponentFixture<GameEndResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameEndResultDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GameEndResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
