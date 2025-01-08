import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormArray, FormBuilder } from '@angular/forms';
import { AddressForm } from '../../../../interfaces/forms';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'app-addresses-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddressFormComponent],
  templateUrl: './addresses-form.component.html',
  styleUrl: './addresses-form.component.scss'
})
export class AddressesFormComponent {
  constructor(private readonly fb: FormBuilder) { }
  @Input() public addressesFormArray: FormArray<FormGroup<AddressForm>> = new FormArray<FormGroup<AddressForm>>([]);

  public mainForm: FormGroup<{ addresses: FormArray<FormGroup<AddressForm>> }> = new FormGroup({
    addresses: this.addressesFormArray
  });
  get addresses(): FormArray<FormGroup<AddressForm>> {
    return this.mainForm.controls["addresses"] as FormArray;
  }

  public addNewAddress(): void {
    this.addressesFormArray.push(this.getEmptyAddressForm());
    this.mainForm.controls["addresses"] = this.addressesFormArray;
  }

  public removeAddress(index: number): void {
    this.addressesFormArray.removeAt(index); 
    this.mainForm.controls["addresses"] = this.addressesFormArray;
  }

  private getEmptyAddressForm(): FormGroup<AddressForm> {
    return this.fb.group<AddressForm>({
      line: this.fb.control('', { nonNullable: true }),
      city: this.fb.control(''),
      zip: this.fb.control(''),

    })
  }

}
