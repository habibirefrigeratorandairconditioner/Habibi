import { TestBed } from '@angular/core/testing';

import { AddDailyRecordService } from './add-daily-record.service';

describe('AddDailyRecordService', () => {
  let service: AddDailyRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDailyRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
