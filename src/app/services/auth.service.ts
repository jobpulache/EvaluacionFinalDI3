import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly VALID_CODE = '76141530'; 
  private readonly VALID_PASSWORD = '20060802';

  constructor(private router: Router) { }

  login(codigo: string, password: string): boolean {
    if (codigo === this.VALID_CODE && password === this.VALID_PASSWORD) {
      sessionStorage.setItem('userCode', codigo);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('userCode');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('userCode') !== null;
  }
}