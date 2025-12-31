import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigManagementComplianceRenewals } from './rig-management-compliance-renewals';

describe('RigManagementComplianceRenewals', () => {
  let component: RigManagementComplianceRenewals;
  let fixture: ComponentFixture<RigManagementComplianceRenewals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigManagementComplianceRenewals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigManagementComplianceRenewals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
