import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  template: `
    <h2>Panel Administrativo</h2>
    <app-producto-form></app-producto-form>
    <app-producto-list></app-producto-list>
    <button (click)="logout()" class="logout-button">Cerrar sesión</button>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
