import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocPermissions } from './noc-permissions';

describe('NocPermissions', () => {
  let component: NocPermissions;
  let fixture: ComponentFixture<NocPermissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NocPermissions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NocPermissions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
