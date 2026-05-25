import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerificationForm } from './otp-verification-form';

describe('OtpVerificationForm', () => {
  let component: OtpVerificationForm;
  let fixture: ComponentFixture<OtpVerificationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpVerificationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpVerificationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
