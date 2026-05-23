import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  imports: [],
  template: '<p>© {{currentYear}} CrackenCRM All rights reserved. | <a href="/privacy"> Privacy</a></p>\n',
  styleUrl: './footer-component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
