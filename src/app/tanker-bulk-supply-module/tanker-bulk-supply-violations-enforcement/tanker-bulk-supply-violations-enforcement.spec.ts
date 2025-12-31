import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerBulkSupplyViolationsEnforcement } from './tanker-bulk-supply-violations-enforcement';

describe('TankerBulkSupplyViolationsEnforcement', () => {
  let component: TankerBulkSupplyViolationsEnforcement;
  let fixture: ComponentFixture<TankerBulkSupplyViolationsEnforcement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankerBulkSupplyViolationsEnforcement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankerBulkSupplyViolationsEnforcement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
