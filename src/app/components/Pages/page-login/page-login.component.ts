import { Component } from '@angular/core';
import { AuthService } from './login.service';
import { Router } from '@angular/router'; // <-- import

@Component({
  selector: 'app-page-login',
  standalone: false,
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
})
export class PageLoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const credentials = { email: this.email, password: this.password };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido!', response);
        // aqui você pode salvar o token JWT, navegar pra outra página, etc.

        // 1️⃣ Salva o token JWT
        localStorage.setItem('token', response.token);

        // 2️⃣ Salva os dados do usuário (nome, foto, email)
        localStorage.setItem('user', JSON.stringify(response.user));

        // this.router.navigate(['/list']).then(() => {
        //   window.location.reload();
        // });
      },
      error: (err) => {
        console.error('Erro no login', err);
      },
    });
  }
}
