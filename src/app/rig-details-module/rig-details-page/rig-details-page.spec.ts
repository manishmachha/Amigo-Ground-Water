import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsPage } from './rig-details-page';

describe('RigDetailsPage', () => {
  let component: RigDetailsPage;
  let fixture: ComponentFixture<RigDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
