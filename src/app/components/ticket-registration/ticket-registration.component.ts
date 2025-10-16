import { Component, EventEmitter, Output } from '@angular/core';
import { TicketRegistrationService } from './ticket-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-registration',
  standalone: false,
  templateUrl: './ticket-registration.component.html',
  styleUrl: './ticket-registration.component.css',
})
export class TicketRegistrationComponent {
  @Output() close = new EventEmitter<void>();

  title = '';
  description = '';

  constructor(private ticketRegistrationService: TicketRegistrationService) { }

  OnCreation(){
    const credentials = { title: this.title, description: this.description };

    this.ticketRegistrationService.CreateTicket(credentials).subscribe({

      next: (response) => {
        console.log('Ticket criado com sucesso!', response);
    }})
  }

  closeModal() {
    this.close.emit();
  }
}
