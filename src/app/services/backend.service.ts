import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gender, User } from '../interfaces/user.interface';

interface Response {
  results: Result[];
}
interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
}

interface Name {
  first: string;
  last: string;
}

interface Location {
  street: Street;
  city: string;
  postcode: string;
}

interface Street {
  number: string;
  name: string;
}
interface Dob {
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public users: User[] = [];

  constructor(private httpClient: HttpClient) {
  }

  loadUsers() {
    this.httpClient.get<Response>("https://randomuser.me/api/?results=3")
    .subscribe((data: Response) => {
      this.users = data.results.map(val => <User>{
        firstName: val.name.first, lastName: val.name.last,
        age: val.dob.age, gender: Object.entries(Gender).find(([_, v]) => v === val.gender)![0], activated: true, dateOfCreation: new Date(), salary: 2000,
        company: 'Issoft',
        department: 'BE',
        email: val.email,
        addresses: [{
          line: val.location.street.name + ", " + val.location.street.number,
          city: val.location.city
        }]
      })
    }) 
  }

}
