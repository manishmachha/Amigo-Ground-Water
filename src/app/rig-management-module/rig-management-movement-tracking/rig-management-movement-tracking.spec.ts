import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigManagementMovementTracking } from './rig-management-movement-tracking';

describe('RigManagementMovementTracking', () => {
  let component: RigManagementMovementTracking;
  let fixture: ComponentFixture<RigManagementMovementTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigManagementMovementTracking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigManagementMovementTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
