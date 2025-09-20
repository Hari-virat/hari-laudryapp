import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // ✅ Always inject at the top
  const token = localStorage.getItem('authToken');

  if (token) {
    router.navigate(['/home']); // Redirect if already logged in
    return false;
  }

  return true; // Allow access to login
};

