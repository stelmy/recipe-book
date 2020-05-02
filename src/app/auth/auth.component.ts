import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>

    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.logIn(email, password);
    } else {
      authObservable = this.signUp(email, password);
    }

    authObservable
      .subscribe(response => {
          console.log(response);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        });

    form.reset();
  }

  logIn(email: string, password: string) {
    return this.authService.logIn(email, password);
  }

  signUp(email: string, password: string) {
    return this.authService.signUp(email, password);
  }
}
