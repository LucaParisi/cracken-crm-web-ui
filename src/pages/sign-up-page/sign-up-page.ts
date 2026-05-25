import { Component } from '@angular/core';
import {
  LucideAtSign,
  LucideCalendarDays,
  LucideKey,
  LucideMail,
  LucidePhone,
  LucideUserRoundPen, LucideUserRoundSearch, LucideVenusAndMars
} from '@lucide/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UiInput} from '../../ui/components/base/ui-input/ui-input';
import {UiButton} from '../../ui/components/base/ui-button/ui-button';
import {Delimiter} from '../../ui/components/base/ui-delimiter/ui-delimiter';
import {PublicHeader} from '../../ui/components/public/public-header/public-header';
import {BackButton} from '../../ui/components/public/back-button/back-button';
import {Router} from '@angular/router';
import {UiCombox} from '../../ui/components/base/ui-combox/ui-combox';
import {AVAILABLE_GENDERS} from '@constants';
import {ComboxOption} from '../../types/combox.type';

@Component({
  selector: 'sign-up-page',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    LucideUserRoundPen,
    UiInput,
    UiButton,
    LucideMail,
    Delimiter,
    LucidePhone,
    LucideCalendarDays,
    LucideUserRoundSearch,
    LucideAtSign,
    LucideKey,
    PublicHeader,
    BackButton,
    UiCombox,
    LucideVenusAndMars
  ],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  constructor(
    private readonly router: Router
  ) {}

  get genders(): ComboxOption[] {
    return AVAILABLE_GENDERS;
  }

  isLoading: boolean = false;

  newUser: any = {
    firstName : ''
  }

  handleBack(){
    history.back();
  }

  navigateToLogin(){
    this.router.navigate(['auth/login'])
  }
}
