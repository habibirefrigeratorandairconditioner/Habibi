import { TestBed } from '@angular/core/testing';

import { GetAllDailyDataService } from './get-all-daily-data.service';

describe('GetAllDailyDataService', () => {
  let service: GetAllDailyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllDailyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
