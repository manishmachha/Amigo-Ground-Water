import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerBulkSupplyBillingRevenue } from './tanker-bulk-supply-billing-revenue';

describe('TankerBulkSupplyBillingRevenue', () => {
  let component: TankerBulkSupplyBillingRevenue;
  let fixture: ComponentFixture<TankerBulkSupplyBillingRevenue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankerBulkSupplyBillingRevenue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankerBulkSupplyBillingRevenue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
