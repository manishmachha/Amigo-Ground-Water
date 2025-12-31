import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerBulkSupplyTripLogsTracking } from './tanker-bulk-supply-trip-logs-tracking';

describe('TankerBulkSupplyTripLogsTracking', () => {
  let component: TankerBulkSupplyTripLogsTracking;
  let fixture: ComponentFixture<TankerBulkSupplyTripLogsTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankerBulkSupplyTripLogsTracking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankerBulkSupplyTripLogsTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
