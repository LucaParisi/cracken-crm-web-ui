export type ToastType = 'success' | 'info' | 'warning' | 'error';

export type ToastColor = 'green' | 'gray' | 'orange' | 'red';

export type ToastTitle =  'Success' | 'Attention' | 'Error' | 'Info';

export class Toast {
  constructor(type: ToastType, message: string) {
    this.type = type;
    this.message = message;
    this.id = ++Toast.counter;
  }

  static counter = 0;
  id = 0;
  type!: ToastType;
  message!: string;
}
