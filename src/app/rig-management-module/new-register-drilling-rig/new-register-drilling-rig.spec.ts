import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegisterDrillingRig } from './new-register-drilling-rig';

describe('NewRegisterDrillingRig', () => {
  let component: NewRegisterDrillingRig;
  let fixture: ComponentFixture<NewRegisterDrillingRig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRegisterDrillingRig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRegisterDrillingRig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
