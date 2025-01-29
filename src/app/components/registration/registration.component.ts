import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  public userForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordRepeat: new FormControl('', [Validators.required])
  })

  public register(): void {
    if (this.userForm.valid) {
      if (this.passwordControl.value === this.passwordRepeatControl.value) {
        this.authService.registerUser({ login: this.loginControl.value, password: this.passwordControl.value });
        this.router.navigate(['login'], { relativeTo: this.route.parent });
      }

    }
  }

  get loginControl(): FormControl { return this.userForm.controls.login; }

  get passwordControl(): FormControl { return this.userForm.controls.password; }

  get passwordRepeatControl(): FormControl { return this.userForm.controls.passwordRepeat; }

}

