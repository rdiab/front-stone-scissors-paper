import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { MoveEnum } from '../enum/move.enum';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize livesPlayer and livesComputer to 3', () => {
    expect(service.livesPlayer).toEqual(3);
    expect(service.livesComputer).toEqual(3);
  });

  it('should initialize moves array with correct values', () => {
    expect(service.moves).toEqual([MoveEnum.STONE, MoveEnum.SCISSORS, MoveEnum.PAPER]);
  });

  it('should set lives to all players correctly', () => {
    const lives = 5;
    service.setLivesToAllPlayers(lives);
    expect(service.livesPlayer).toEqual(lives);
    expect(service.livesComputer).toEqual(lives);
  });

  it('should subtract player life correctly', () => {
    service.subtractPlayerLife();
    expect(service.livesPlayer).toEqual(2);
  });

  it('should subtract computer life correctly', () => {
    service.subtractComputerLife();
    expect(service.livesComputer).toEqual(2);
  });

  it('should reset the game correctly', () => {
    service.livesPlayer = 1;
    service.livesComputer = 2;
    service.resetGame();
    expect(service.livesPlayer).toEqual(3);
    expect(service.livesComputer).toEqual(3);
  });
});
