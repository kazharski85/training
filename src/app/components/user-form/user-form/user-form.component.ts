import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Address, Gender, User } from '../../../interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressesFormComponent } from '../address-form/addresses-form/addresses-form.component';
import { AddressForm, UserForm } from '../../../interfaces/forms';
import { takeWhile } from 'rxjs';

function gmailDomainValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    return !control.value.toString().includes('@gmail.com') ? { gmailDomain: true } : null;
  }
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddressesFormComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit{
  public userId: number | null = null
  private componentActive: boolean = true;
  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { 
      this.route.paramMap
            .pipe(takeWhile(_ => this.componentActive))
            .subscribe(routeParams => this.userId = routeParams.get('userId') as number | null)
    }

    ngOnInit() {
      if (this.userId !== null) {
        this.userFormGroup.patchValue(this.userService.users[this.userId])
      }
    }

  departments: string[] = ['FE', 'BE', 'Mobile', 'QA'];
  public userFormGroup = new FormGroup<UserForm>({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(5), Validators.max(100)]),
    company: new FormControl('', [Validators.maxLength(35)]),
    email: new FormControl('', [Validators.required, Validators.email, gmailDomainValidator()]),
    department: new FormControl(''),
    gender: new FormControl(null, [Validators.required]),
    activated: new FormControl(),
    addresses: new FormControl(),
  })

  public saveUser(): void {
    if (this.userFormGroup.valid) {
      this.userService.submitUser(this.convertFormToObject(this.userFormGroup), this.userId);
      this.router.navigate(['list'], { relativeTo: this.route.parent })
    }
  }

  get firstNameControl(): FormControl { return this.userFormGroup.controls.firstName; }

  get lastNameControl(): FormControl { return this.userFormGroup.controls.lastName; }

  get ageControl(): FormControl { return this.userFormGroup.controls.age; }

  get emailControl(): FormControl { return this.userFormGroup.controls.email; }

  get companyControl(): FormControl { return this.userFormGroup.controls.company; }

  get genderControl(): FormControl { return this.userFormGroup.controls.gender; }

  get addressArray(): FormArray<FormGroup<AddressForm>> { return this.userFormGroup.controls.addresses.get('addresses') as FormArray ; }

  private convertFormToObject(form: FormGroup<UserForm>): User {
    let u = new User();
    const controls = form.controls;
    u.firstName = controls.firstName.value;
    u.lastName = controls.lastName.value;
    u.age = controls.age.value;
    u.company = controls.company.value;
    u.email = controls.email.value;
    u.department = controls.department.value;
    u.activated = controls.activated.value;
    u.gender = controls.gender.value;
    u.addresses = controls.addresses.value;
    return u;
  }

}
