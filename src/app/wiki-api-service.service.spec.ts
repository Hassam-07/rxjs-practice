import { TestBed } from '@angular/core/testing';

import { WikiApiServiceService } from './wiki-api-service.service';

describe('WikiApiServiceService', () => {
  let service: WikiApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
