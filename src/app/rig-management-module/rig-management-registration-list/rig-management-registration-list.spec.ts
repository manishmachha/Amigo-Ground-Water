import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigManagementRegistrationList } from './rig-management-registration-list';

describe('RigManagementRegistrationList', () => {
  let component: RigManagementRegistrationList;
  let fixture: ComponentFixture<RigManagementRegistrationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigManagementRegistrationList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigManagementRegistrationList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
