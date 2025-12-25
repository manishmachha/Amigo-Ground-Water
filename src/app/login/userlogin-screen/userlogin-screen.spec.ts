import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginScreen } from './userlogin-screen';

describe('UserloginScreen', () => {
  let component: UserloginScreen;
  let fixture: ComponentFixture<UserloginScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserloginScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserloginScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
