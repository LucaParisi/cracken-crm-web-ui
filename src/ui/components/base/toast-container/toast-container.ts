import {Component, inject, input} from '@angular/core';
import {ToastEvent} from '../toast-event/toast-event';
import {ToastService} from '@services';

@Component({
  selector: 'toast-container',
  standalone: true,
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.css',
  imports: [
    ToastEvent
  ]
})
export class ToastContainer{
  toastService = inject(ToastService);
  protected readonly input = input;
}
