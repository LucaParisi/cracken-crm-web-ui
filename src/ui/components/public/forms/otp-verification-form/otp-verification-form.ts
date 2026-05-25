import { Component } from '@angular/core';
import {PublicHeader} from "../../public-header/public-header";
import {LucideKey, LucideShieldHalf} from '@lucide/angular';
import {UiInput} from '../../../base/ui-input/ui-input';
import {FormsModule} from '@angular/forms';
import {Delimiter} from '../../../base/ui-delimiter/ui-delimiter';
import {UiButton} from '../../../base/ui-button/ui-button';

@Component({
  selector: 'otp-verification-form',
  imports: [
    PublicHeader,
    UiInput,
    FormsModule,
    LucideShieldHalf,
    Delimiter,
    UiButton
  ],
  templateUrl: './otp-verification-form.html',
  styleUrl: './otp-verification-form.css',
})
export class OtpVerificationForm {

  isLoading: boolean = false;
  otp?: string;

  handleNext(){
    this.isLoading = true;
  }
}
