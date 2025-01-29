import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isUserLoggedIn();
};

export const unAuthGuard: CanActivateFn = (route, state) => {
  return !inject(AuthService).isUserLoggedIn();
};
