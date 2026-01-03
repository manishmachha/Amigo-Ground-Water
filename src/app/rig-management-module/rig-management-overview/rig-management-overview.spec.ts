import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigManagementOverview } from './rig-management-overview';

describe('RigManagementOverview', () => {
  let component: RigManagementOverview;
  let fixture: ComponentFixture<RigManagementOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigManagementOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigManagementOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
