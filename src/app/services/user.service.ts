import { Injectable } from '@angular/core';
import { Gender, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  public users: User[] = [{
    firstName: 'Bob', lastName: "Dylan", age: 50, gender: Gender.M, activated: true, dateOfCreation: new Date("2019-01-16"), salary: 2000,
    company: 'Issoft',
    department: 'BE',
    email: 'test@mail.ru'
  },
  {
    firstName: 'Barbara', lastName: "Dylan", age: 58, gender: Gender.F, activated: false, dateOfCreation: new Date("2020-02-11"), salary: 1000,
    company: 'Issoft',
    department: 'FE',
    email: 'fe@issoft.by'
  },
  {
    firstName: 'John', lastName: "Smith", age: 10, gender: Gender.M, activated: true, dateOfCreation: new Date("2019-03-03"), salary: 1920.2,
    company: 'Issoft',
    department: 'QA',
    email: 'qa@gmail.com'
  }
  ];

  public addUser(user: User): void {
    user.dateOfCreation = new Date();
    this.users.push(user);
  }

}
