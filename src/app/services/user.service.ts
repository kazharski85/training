import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  public users: User[] = [];
  constructor(private api: BackendService) { 
    this.users = this.api.users;
  }
  
  public submitUser(user: User, id: number | null): void {
    if (id == null) {
      user.dateOfCreation = new Date();
      this.users = [...this.users, user];
    }
    else {
      this.users = [...this.users.slice(0, id), user, ...this.users.slice(id + 1)];
    }
  }

}
