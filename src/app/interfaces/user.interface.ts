export class User {
  public firstName: string | null | undefined;
  public lastName: string | null | undefined;
  public age: number | null | undefined;
  public gender: Gender | null | undefined;;
  public activated!: boolean;
  public dateOfCreation!: Date;
  public salary!: number;
  public company: string | null | undefined;
  public department: string | null | undefined;
  public email: string | null | undefined;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
}
}

export enum Gender {
  M = 'Male',
  F = 'Female'
}

