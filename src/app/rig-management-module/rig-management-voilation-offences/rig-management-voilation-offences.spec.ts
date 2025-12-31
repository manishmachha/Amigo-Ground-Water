import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigManagementVoilationOffences } from './rig-management-voilation-offences';

describe('RigManagementVoilationOffences', () => {
  let component: RigManagementVoilationOffences;
  let fixture: ComponentFixture<RigManagementVoilationOffences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigManagementVoilationOffences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigManagementVoilationOffences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
