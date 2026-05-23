import { Routes } from '@angular/router';
import {LoginPage} from '../pages/login-page/login-page';
import {SignUpPage} from '../pages/sign-up-page/sign-up-page';

export const routes: Routes = [
  {
    path: '', component: LoginPage
  },
  {
    path: 'sign-up', component: SignUpPage
  }
];
