import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordServiceComponent } from './forgot-password-service.component';

describe('ForgotPasswordServiceComponent', () => {
  let component: ForgotPasswordServiceComponent;
  let fixture: ComponentFixture<ForgotPasswordServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
