import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringCompliance } from './monitoring-compliance';

describe('MonitoringCompliance', () => {
  let component: MonitoringCompliance;
  let fixture: ComponentFixture<MonitoringCompliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringCompliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringCompliance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
