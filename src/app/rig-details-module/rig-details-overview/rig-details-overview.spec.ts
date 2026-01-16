import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsOverview } from './rig-details-overview';

describe('RigDetailsOverview', () => {
  let component: RigDetailsOverview;
  let fixture: ComponentFixture<RigDetailsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigDetailsOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigDetailsOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
