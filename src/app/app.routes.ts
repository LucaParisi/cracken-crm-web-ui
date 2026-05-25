import { Routes } from '@angular/router';
import {DashboardPage, ForgotPasswordPage, LoginPage, NotFound, SignUpPage} from '../pages';
import {AuthenticatedLayout, PublicLayout} from '@layouts';
import {authGuard} from '@guards';
import {ForgotPasswordForm} from '../ui/components/public/forms/forgot-password-form/forgot-password-form';
import {OtpVerificationForm} from '../ui/components/public/forms/otp-verification-form/otp-verification-form';

export const routes: Routes = [
  {
    path: 'auth',
    component: PublicLayout,
    children: [
      { path: 'login', component: LoginPage },
      {
        path: 'forgot-password',
        component: ForgotPasswordPage,
        children: [
          { path: '', component: ForgotPasswordForm },
          { path: 'otp-verification', component: OtpVerificationForm },
        ]
      },
      { path: 'sign-up', component: SignUpPage },
      { path: '**', redirectTo: 'login'}
    ],
  },

  {
    path: 'crm',
    component: AuthenticatedLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardPage },
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
