import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../Pages/page-login/login.service';

@Component({
  selector: 'app-top-nav',
  standalone: false,
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {
  @Output() openTicketModal = new EventEmitter<void>();

  toggleTicketRegistration() {
    this.openTicketModal.emit();
  }

  //user info

  constructor(private authservice: AuthService) {}
  
  user: any;
  
    ngOnInit() {
      this.user = this.authservice.getUser();
      console.log('Dados buscados:', this.user);
    }
}
