
enum Subscriptions {
  First= 1,
  Second = 2,
  Third = 3,
}

import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from '../footer-component/footer-component';

@Component({
  selector: 'app-register-page',
  imports: [
    NgOptimizedImage,
    FormsModule,
    FooterComponent
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {

  isPasswordVisible = false;
  isRepeatPasswordVisible = false;

  // Function to show or hide password on eye icon click
  showOrHidePassword(input: HTMLInputElement) {
    if (input.type === 'password') {
      input.type = 'text';
      if (input.id === 'password') {
        this.isPasswordVisible = true;
      } else {
        this.isRepeatPasswordVisible = true;
      }
    } else {
      input.type = 'password';
      if (input.id === 'password') {
        this.isPasswordVisible = false;
      } else {
        this.isRepeatPasswordVisible = false;
      }
    }
  }

  selectedSubscription: Subscriptions | null = null;
  htmlSelectedSubscription: HTMLDivElement | null = null;

  //Function to show the selected subscription panel highlighted and to pass it to a variable
  selectSubscription(htmlSubscriptionFromPanel: HTMLDivElement, selectedSubscriptionFromPanel: Subscriptions) {
    if (this.htmlSelectedSubscription) {
      this.htmlSelectedSubscription.classList.remove('selected-subscription-card');
    }
    htmlSubscriptionFromPanel.classList.add('selected-subscription-card');
    this.selectedSubscription = selectedSubscriptionFromPanel;
    this.htmlSelectedSubscription = htmlSubscriptionFromPanel;
  }
}
