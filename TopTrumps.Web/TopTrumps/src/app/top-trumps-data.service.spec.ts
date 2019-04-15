import { TestBed } from '@angular/core/testing';

import { TopTrumpsDataService } from './top-trumps-data.service';

describe('TopTrumpsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopTrumpsDataService = TestBed.get(TopTrumpsDataService);
    expect(service).toBeTruthy();
  });
});
