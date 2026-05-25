import {Component, signal, WritableSignal} from '@angular/core';
import {AuthService, ToastService} from '@services';
import {LucideAtSign, LucideKey} from '@lucide/angular';
import {FormsModule} from '@angular/forms';
import {UiButton} from '../../ui/components/base/ui-button/ui-button';
import {Delimiter} from '../../ui/components/base/ui-delimiter/ui-delimiter';
import {UiInput} from '../../ui/components/base/ui-input/ui-input';
import {Router} from '@angular/router';
import {PublicHeader} from '../../ui/components/public/public-header/public-header';
import {AccessToken} from '@interfaces';

@Component({
  selector: 'login-page',
  imports: [
    LucideAtSign,
    FormsModule,
    UiButton,
    Delimiter,
    UiInput,
    LucideKey,
    PublicHeader,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  constructor(
    private readonly authService: AuthService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {}

  username!: string;
  password!: string;
  protected readonly isLoading: WritableSignal<boolean> = signal<boolean>(false);

  login(){
    if(!this.username || ! this.password){
      this.toastService.show('warning', 'Please provide username and password');
      return;
    }

    this.authService.login(this.username, this.password)
      .subscribe({
        next: (res: AccessToken) => {
          //TODO handle redirect to internal app
          this.isLoading.set(false);
          this.router.navigate(['/crm/dashboard']);
        },
        error: ()=> {
          this.toastService.show('error', 'Invalid credentials')
          this.isLoading.set(false);
        },
      })
  }
}
