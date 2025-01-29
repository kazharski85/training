import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  public userForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  public login(): void {
    if (this.userForm.valid
      && this.authService.logIn({ login: this.loginControl.value, password: this.passwordControl.value })) {
      this.router.navigate(['list'], { relativeTo: this.route.parent });
    }
  }

  get loginControl(): FormControl { return this.userForm.controls.login; }

  get passwordControl(): FormControl { return this.userForm.controls.password; }

}
