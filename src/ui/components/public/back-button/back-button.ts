import { Component } from '@angular/core';
import {LucideChevronLeft} from "@lucide/angular";
import {UiButton} from "../../base/ui-button/ui-button";

@Component({
  selector: 'public-back-button',
	imports: [
		LucideChevronLeft,
		UiButton
	],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css',
})
export class BackButton {

  handleBack(){
    history.back();
  }
}
