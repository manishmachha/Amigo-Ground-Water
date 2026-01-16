import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsMovementHistory } from './rig-details-movement-history';

describe('RigDetailsMovementHistory', () => {
  let component: RigDetailsMovementHistory;
  let fixture: ComponentFixture<RigDetailsMovementHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigDetailsMovementHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigDetailsMovementHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
