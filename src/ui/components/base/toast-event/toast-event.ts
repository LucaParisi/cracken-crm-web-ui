import {Component, input, InputSignal} from '@angular/core';
import {ToastTitle, ToastType} from '../../../../types/toast.type';
import {NgClass} from '@angular/common';
import {LucideX} from '@lucide/angular';
import {ToastService} from '@services';

@Component({
  selector: 'toast-event',
  imports: [
    NgClass,
    LucideX
  ],
  templateUrl: './toast-event.html',
  styleUrl: './toast-event.css'
})
export class ToastEvent{
  constructor(private readonly toastService: ToastService) {
  }

  id: InputSignal<number | undefined> = input();
  type: InputSignal<ToastType | undefined> = input();
  message: InputSignal<string | undefined> = input();
  index: InputSignal<number> = input(1);

  get title(): ToastTitle {
    switch (this.type()){
      case 'success':
        return 'Success';
      case 'info':
        return 'Info';
      case 'warning':
        return 'Attention';
      case 'error':
        return 'Error';
      default:
        return 'Info';
    }
  }

  close(){
    this.toastService.remove(this.id()!);
  }
}
