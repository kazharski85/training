import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddressForm } from '../../../../interfaces/forms';


@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {
  @Input() addressFormGroup = new FormGroup<AddressForm>({
    line: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    zip: new FormControl('')
  })

  get lineControl(): FormControl { return this.addressFormGroup.controls.line; }

  get lastNameControl(): FormControl { return this.addressFormGroup.controls.city; }

  get ageControl(): FormControl { return this.addressFormGroup.controls.zip; }

}