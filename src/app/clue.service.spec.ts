import { TestBed } from '@angular/core/testing';

import { ClueService } from './clue.service';

describe('ClueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClueService = TestBed.get(ClueService);
    expect(service).toBeTruthy();
  });
});
