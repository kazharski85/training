export class User {
  public firstName: string | undefined | null;
  public lastName: string | undefined | null;
  public age: number | undefined | null;
  public gender: Gender | undefined | null;
  public activated: boolean | undefined | null;
  public dateOfCreation: Date | undefined | null;
  public salary: number | undefined | null;
  public company: string | undefined | null;
  public department: string | undefined | null;
  public email: string | undefined | null;
  public addresses: Address[] | undefined | null;

}

export enum Gender {
  M = 'Male',
  F = 'Female'
}

export class Address {
  public line: string | undefined;
  public city: string | undefined;
  public zip: string | undefined;
}
export class AppUser {
  public login: string | undefined | null;
  public password: string | undefined | null;
}

