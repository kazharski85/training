import { CommonModule } from '@angular/common';
import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup,
  Validator, AbstractControl, ValidationErrors, ReactiveFormsModule, FormArray, FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AddressForm } from '../../../../interfaces/forms';

@Component({
  selector: 'app-addresses-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addresses-form.component.html',
  styleUrl: './addresses-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressesFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressesFormComponent),
      multi: true
    }
  ]
})
export class AddressesFormComponent implements OnInit, ControlValueAccessor, Validator {
  constructor(private readonly fb: FormBuilder) { }
  public addressesFormArray: FormArray<FormGroup<AddressForm>> = new FormArray<FormGroup<AddressForm>>([]);

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

  ngOnInit() {
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    if (val == null) {
      return;
    }
    for (let index = 0; index < val.length; index++) {
      let x = val[index];
      this.addressesFormArray.push(new FormGroup({
        line: new FormControl(x.line, Validators.required),
        city: new FormControl(x.city),
        zip: new FormControl(x.zip)
      }));

    }

    this.mainForm.controls["addresses"] = this.addressesFormArray;
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.mainForm.valueChanges.subscribe(value => fn(value.addresses));
    // this.mainForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.mainForm.disable() : this.mainForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log("Adress validation");
    return this.mainForm.valid ? null : { invalidForm: { valid: false, message: "Address fields are invalid" } };
  }

}
