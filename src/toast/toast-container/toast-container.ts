import {Component, inject, input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ToastEvent} from '../toast-event/toast-event';
import {ToastType} from '../../types/toast.type';
import {ToastService} from '../toast.service';

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
}
