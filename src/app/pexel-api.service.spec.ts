import { TestBed } from '@angular/core/testing';

import { PexelApiService } from './pexel-api.service';

describe('PexelApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PexelApiService = TestBed.get(PexelApiService);
    expect(service).toBeTruthy();
  });
});
