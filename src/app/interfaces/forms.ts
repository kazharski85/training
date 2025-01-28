import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Gender } from "./user.interface";

export interface UserForm {
    firstName: FormControl<string | null>,
    lastName: FormControl<string | null>,
    age: FormControl<number | null>,
    company: FormControl<string | null>,
    email: FormControl<string | null>,
    department: FormControl<string | null>,
    gender: FormControl<Gender | null>,
    activated: FormControl<boolean | null>,
    addresses: FormControl,
}

export interface AddressForm {
    line: FormControl<string | null>;
    city: FormControl<string | null>;
    zip: FormControl<string | null>;
}
