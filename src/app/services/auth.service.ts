import { Injectable } from '@angular/core';
import { AppUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public appUsers: AppUser[] = [];
  private isLogged: boolean = false;
  constructor() { }

  public registerUser(user: AppUser): void {
    this.appUsers = [...this.appUsers, user];
  }

  public logIn(user: AppUser): boolean {
    this.isLogged = this.appUsers.some(u => u.login === user.login && u.password === user.password);
    return this.isLogged;
  }

  public logOut(): void {
    this.isLogged = false;
  }

  public isUserLoggedIn(): boolean {
    return this.isLogged;
  }

}
