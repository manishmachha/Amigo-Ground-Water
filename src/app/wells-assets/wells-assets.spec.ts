import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsAssets } from './wells-assets';

describe('WellsAssets', () => {
  let component: WellsAssets;
  let fixture: ComponentFixture<WellsAssets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WellsAssets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellsAssets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
