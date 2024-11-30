import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationServiceComponent } from './user-registration-service.component';

describe('UserRegistrationServiceComponent', () => {
  let component: UserRegistrationServiceComponent;
  let fixture: ComponentFixture<UserRegistrationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
