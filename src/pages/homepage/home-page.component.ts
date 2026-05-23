import { Component } from '@angular/core';
import {NavigationBar} from '../navigation-bar/navigation-bar';

@Component({
  selector: 'app-homepage',
  imports: [
    NavigationBar
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePage {

}
