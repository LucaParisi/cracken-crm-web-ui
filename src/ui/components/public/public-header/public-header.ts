import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'public-header',
	imports: [
		NgOptimizedImage
	],
  templateUrl: './public-header.html',
  styleUrl: './public-header.css',
})
export class PublicHeader {
    @Input()
    title: string = 'Welcome on Cracken';
}
