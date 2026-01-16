import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsRegistration } from './rig-details-registration';

describe('RigDetailsRegistration', () => {
  let component: RigDetailsRegistration;
  let fixture: ComponentFixture<RigDetailsRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigDetailsRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigDetailsRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
