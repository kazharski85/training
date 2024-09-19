export interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  activated: boolean;
}

export enum Gender {
  M = 'Male',
  F = 'Female'
}
