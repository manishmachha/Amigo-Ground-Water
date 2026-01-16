import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsDrillingLogs } from './rig-details-drilling-logs';

describe('RigDetailsDrillingLogs', () => {
  let component: RigDetailsDrillingLogs;
  let fixture: ComponentFixture<RigDetailsDrillingLogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigDetailsDrillingLogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigDetailsDrillingLogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
