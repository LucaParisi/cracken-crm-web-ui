import {Component, computed, signal, WritableSignal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Auth} from '@apis';
import {AccessToken} from '@interfaces';
import {LucideAtSign, LucideDynamicIcon, LucideEye, LucideEyeClosed, LucideKey} from '@lucide/angular';
import {FormsModule} from '@angular/forms';
import {ToastService} from '../../toast/toast.service';
import {UiButton} from '../../ui/components/base/ui-button/ui-button';
import {Delimiter} from '../../ui/components/base/ui-delimiter/ui-delimiter';
import {UiInput} from '../../ui/components/base/ui-input/ui-input';

@Component({
  selector: 'app-login-page',
  imports: [
    NgOptimizedImage,
    LucideAtSign,
    LucideDynamicIcon,
    FormsModule,
    UiButton,
    Delimiter,
    UiInput,
    LucideKey,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  constructor(
    private readonly authService: Auth,
    private readonly toastService: ToastService
  ) {}

  username!: string;
  password!: string;
  protected readonly isLoading: WritableSignal<boolean> = signal<boolean>(false);
  protected readonly isPasswordVisibile: WritableSignal<boolean> = signal<boolean>(false);
  protected readonly passwordInputIcon = computed(() => this.isPasswordVisibile() ? LucideEye : LucideEyeClosed)

  get passwordInputType(): 'text' | 'password' {
    return this.isPasswordVisibile() ? 'text' : 'password';
  }

  switchPasswordVisibility(){
    this.isPasswordVisibile.update((value) => !value)
  }

  login(){
    if(!this.username || ! this.password){
      this.toastService.show('warning', 'Please provide username and password');
      return;
    }

    this.isLoading.set(true);
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (res: AccessToken) => {
          //TODO handle redirect to internal app
          this.isLoading.set(false);
        },
        error: (err)=> {
          this.toastService.show('error', 'Invalid credentials')
          this.isLoading.set(false);
        },
      })
  }

  protected readonly console = console;
}
