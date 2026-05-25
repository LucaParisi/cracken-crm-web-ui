import {Component, Input} from '@angular/core';
import {ComboxOption} from '../../../../types/combox.type';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'ui-combox',
  imports: [
    FormsModule
  ],
  templateUrl: './ui-combox.html',
  styleUrl: './ui-combox.css',
})
export class UiCombox {
  @Input()
  options: ComboxOption[] = []

  @Input()
  label!: string;
}
