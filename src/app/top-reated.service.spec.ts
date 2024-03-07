import { TestBed } from '@angular/core/testing';

import { TopReatedService } from './top-reated.service';

describe('TopReatedService', () => {
  let service: TopReatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopReatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
