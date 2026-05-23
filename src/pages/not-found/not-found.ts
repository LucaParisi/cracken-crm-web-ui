import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../footer-component/footer-component';

@Component({
  selector: 'app-not-found',
  imports: [
    NgOptimizedImage,
    FooterComponent
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
