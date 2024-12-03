import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Gender, User } from '../../../interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';

function gmailDomainValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    return !control.value.toString().includes('@gmail.com') ? { gmailDomain: true } : null;
  }
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }


  departments: string[] = ['FE', 'BE', 'Mobile', 'QA'];
  public userFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(5), Validators.max(100)]),
    company: new FormControl('', [Validators.maxLength(35)]),
    email: new FormControl('', [Validators.required, Validators.email, gmailDomainValidator()]),
    department: new FormControl(''),
    gender: new FormControl(null, [Validators.required]),
    activated: new FormControl(),
  })

  public saveUser(): void {
    if (this.userFormGroup.valid) {
      this.userService.addUser(new User(this.userFormGroup.value));
      this.router.navigate(['list'], { relativeTo: this.route.parent })
    }
  }

}
