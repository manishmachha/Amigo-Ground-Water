import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsOwnerDetails } from './rig-details-owner-details';

describe('RigDetailsOwnerDetails', () => {
  let component: RigDetailsOwnerDetails;
  let fixture: ComponentFixture<RigDetailsOwnerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigDetailsOwnerDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigDetailsOwnerDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
