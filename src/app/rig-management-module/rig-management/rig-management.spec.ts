import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigManagement } from './rig-management';

describe('RigManagement', () => {
  let component: RigManagement;
  let fixture: ComponentFixture<RigManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
