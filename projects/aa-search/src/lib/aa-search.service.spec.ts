import { TestBed } from '@angular/core/testing';

import { AaSearchService } from './aa-search.service';

describe('AaSearchService', () => {
  let service: AaSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
