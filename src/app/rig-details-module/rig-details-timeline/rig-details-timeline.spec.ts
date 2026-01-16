import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsTimeline } from './rig-details-timeline';

describe('RigDetailsTimeline', () => {
  let component: RigDetailsTimeline;
  let fixture: ComponentFixture<RigDetailsTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigDetailsTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigDetailsTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
