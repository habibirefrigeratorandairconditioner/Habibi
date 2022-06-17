import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingFeeRecordComponent } from './remaining-fee-record.component';

describe('RemainingFeeRecordComponent', () => {
  let component: RemainingFeeRecordComponent;
  let fixture: ComponentFixture<RemainingFeeRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainingFeeRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainingFeeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
