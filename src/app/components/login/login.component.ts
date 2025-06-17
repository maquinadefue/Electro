import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.isLoading = true;
    this.errorMessage = '';

    const { username, password } = this.credentials;

    this.authService.login(username, password).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Credenciales incorrectas';
          this.credentials.password = '';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Error de autenticación';
        this.credentials.password = '';
        this.isLoading = false;
      }
    });
  }
}
