import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'], // corrigido
})
export class AppComponent {
  title = 'n3-academy';

  // variável para controlar o modal
  showTicketModal = false;

  showTicketModal2 = false;
  isLoginPage = false;

  constructor(private router: Router) {
    // Detecta a rota atual
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects.includes('/login');
      }
    });
  }
}
