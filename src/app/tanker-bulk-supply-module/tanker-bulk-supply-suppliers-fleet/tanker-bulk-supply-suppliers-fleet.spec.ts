import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerBulkSupplySuppliersFleet } from './tanker-bulk-supply-suppliers-fleet';

describe('TankerBulkSupplySuppliersFleet', () => {
  let component: TankerBulkSupplySuppliersFleet;
  let fixture: ComponentFixture<TankerBulkSupplySuppliersFleet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankerBulkSupplySuppliersFleet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankerBulkSupplySuppliersFleet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
