import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidePassword = true;
  
  loginForm = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}$')])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const success = this.authService.login(
        this.loginForm.get('codigo')?.value || '',
        this.loginForm.get('password')?.value || ''
      );

      if (success) {
        this.router.navigate(['/posts']); 
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }
}