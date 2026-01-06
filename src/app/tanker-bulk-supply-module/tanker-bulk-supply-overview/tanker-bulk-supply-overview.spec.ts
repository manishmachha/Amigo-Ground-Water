import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerBulkSupplyOverview } from './tanker-bulk-supply-overview';

describe('TankerBulkSupplyOverview', () => {
  let component: TankerBulkSupplyOverview;
  let fixture: ComponentFixture<TankerBulkSupplyOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankerBulkSupplyOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankerBulkSupplyOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
