import { TestBed } from '@angular/core/testing';

import { GameRepositoryService } from './game-repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GameService', () => {
  let service: GameRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GameRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
