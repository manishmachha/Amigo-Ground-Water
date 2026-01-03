import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerBulkSupplyFillingStation } from './tanker-bulk-supply-filling-station';

describe('TankerBulkSupplyFillingStation', () => {
  let component: TankerBulkSupplyFillingStation;
  let fixture: ComponentFixture<TankerBulkSupplyFillingStation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankerBulkSupplyFillingStation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankerBulkSupplyFillingStation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
