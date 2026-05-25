import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BackButton} from '../../ui/components/public/back-button/back-button';

@Component({
  selector: 'forgot-password-page',
  imports: [
    BackButton,
    RouterOutlet
  ],
  templateUrl: './forgot-password-page.html',
  styleUrl: './forgot-password-page.css',
})
export class ForgotPasswordPage {}
