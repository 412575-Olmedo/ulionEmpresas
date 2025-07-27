import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private userId: number | null = null;

  login(id: number) {
    this.isLoggedIn = true;
    this.userId = id;
    localStorage.setItem('userId', id.toString());
  }

  logout() {
    this.isLoggedIn = false;
    this.userId = null;
    localStorage.removeItem('userId');
  }

  getUserId(): number | null {
    const id = localStorage.getItem('userId');
    return id ? parseInt(id, 10) : null;
  }

  isAuthenticated(): boolean {
    return this.getUserId() !== null;
  }
}
