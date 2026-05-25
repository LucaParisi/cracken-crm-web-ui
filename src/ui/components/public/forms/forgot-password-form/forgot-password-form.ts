import { Component } from '@angular/core';
import {Delimiter} from "../../../base/ui-delimiter/ui-delimiter";
import {LucideAtSign, LucideKey} from "@lucide/angular";
import {UiButton} from "../../../base/ui-button/ui-button";
import {UiInput} from "../../../base/ui-input/ui-input";
import {PublicHeader} from '../../public-header/public-header';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'forgot-password-form',
  imports: [
    LucideAtSign,
    UiInput,
    LucideKey,
    FormsModule,
    Delimiter,
    UiButton,
    PublicHeader
  ],
  templateUrl: './forgot-password-form.html',
  styleUrl: './forgot-password-form.css',
})
export class ForgotPasswordForm {
  constructor(private readonly router: Router) {}

  isLoading: boolean = false;
  username?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;

  get disableNext(){
    return !this.username || !this.oldPassword ||
      !this.newPassword || !this.confirmPassword;
  }

  handleNext(){
    this.isLoading = true
    this.router.navigate(['/auth/forgot-password/otp-verification']);
  }
}
