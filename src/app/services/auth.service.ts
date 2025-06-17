import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STORAGE_KEY = 'auth_data';
  private readonly API_URL = 'http://localhost:3000/api/admins/login'; // Asegúrate de que coincide con tu ruta real

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ message: string; username: string }>(this.API_URL, { username, password }).pipe(
      tap(response => {
        const authData = {
          isLoggedIn: true,
          username: response.username,
          timestamp: new Date().getTime()
        };
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(authData));
      }),
      map(() => true), // ✅ aquí convertimos el resultado a booleano
      catchError(err => {
        console.error('Error en login:', err);
        return of(false); // devolvemos false si hay error
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const authData = this.getAuthData();
    return authData?.isLoggedIn === true;
  }

  getUsername(): string | null {
    return this.getAuthData()?.username || null;
  }

  private getAuthData(): any {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }
}
