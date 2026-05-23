import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {LucideChevronLeft, LucideUserRoundPen} from '@lucide/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    LucideUserRoundPen,
    LucideChevronLeft
  ],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  newUser: any = {
    firstName : ''
  }
}
