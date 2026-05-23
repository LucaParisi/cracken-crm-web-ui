import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonType} from '../../../../types/button.type';
import {NgClass} from '@angular/common';
import {LucideShell} from '@lucide/angular';

@Component({
  selector: 'ui-button',
  imports: [
    NgClass,
    LucideShell
  ],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {
  @Input()
  type!: ButtonType;

  @Input()
  label!: string;

  @Input()
  additionalNgClass: string = '';

  @Input()
  disabled: boolean = false;

  @Input()
  loading: boolean = false;

  get ngClasses(){
    return [
      this.additionalNgClass,
      `btn-${this.type}`,
      this.loading ? 'opacity-75': ''
    ];
  }

  @Output()
  onClick = new EventEmitter<void>();
}
