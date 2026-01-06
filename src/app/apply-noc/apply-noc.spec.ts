import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNoc } from './apply-noc';

describe('ApplyNoc', () => {
  let component: ApplyNoc;
  let fixture: ComponentFixture<ApplyNoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyNoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyNoc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
