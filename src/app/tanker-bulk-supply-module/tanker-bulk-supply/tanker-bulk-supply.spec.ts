import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankerBulkSupply } from './tanker-bulk-supply';

describe('TankerBulkSupply', () => {
  let component: TankerBulkSupply;
  let fixture: ComponentFixture<TankerBulkSupply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankerBulkSupply]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankerBulkSupply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
