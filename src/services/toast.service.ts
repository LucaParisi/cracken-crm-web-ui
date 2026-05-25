import { Injectable, signal } from '@angular/core';
import {Toast, ToastType} from '../types/toast.type';

@Injectable({ providedIn: 'root' })
export class ToastService {

  toasts = signal<Toast[]>([]);

  show(type: ToastType, message: string) {
    const toast: Toast = new Toast(type, message);

    this.toasts.update(t => {
      const old = [...t];
      if(old.length >= 3){
        old.shift();
      }
      return [...old, toast]
    });

    setTimeout(() => {
      this.toasts.update(t =>
        t.filter(x => x.id !== toast.id)
      );
    }, 3000);
  }

  remove(id: number){
    this.toasts.update(t =>
      t.filter((x => x.id !== id))
    )
  }
}
