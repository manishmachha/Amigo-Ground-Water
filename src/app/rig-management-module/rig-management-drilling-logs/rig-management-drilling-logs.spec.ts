import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigManagementDrillingLogs } from './rig-management-drilling-logs';

describe('RigManagementDrillingLogs', () => {
  let component: RigManagementDrillingLogs;
  let fixture: ComponentFixture<RigManagementDrillingLogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigManagementDrillingLogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigManagementDrillingLogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
