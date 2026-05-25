import {
  Component,
  forwardRef,
  Input, signal, WritableSignal,
} from '@angular/core';

import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {LucideEye, LucideEyeClosed} from '@lucide/angular';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [
    FormsModule,
    LucideEye,
    LucideEyeClosed
  ],
  templateUrl: './ui-input.html',
  styleUrl: './ui-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInput),
      multi: true
    }
  ]
})
export class UiInput implements ControlValueAccessor {

  @Input()
  label = '';

  @Input()
  type = 'text';

  @Input()
  placeholder = '';

  value = '';

  disabled = false;

  protected readonly isPasswordVisibile: WritableSignal<boolean> = signal<boolean>(false);

  private onChange: (value: string) => void = () => {};

  private onTouched: () => void = () => {};

  get _type(){
    return this.isPasswordVisibile() && this.type === 'password' ? 'text' : this.type;
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    this.onChange(this.value);

    this.onTouched();
  }

  switchPasswordVisibility(){
    this.isPasswordVisibile.update((value) => !value)
  }

}
