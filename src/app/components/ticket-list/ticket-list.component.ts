import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Pages/page-login/login.service';
import { Ticket, TicketListService } from './ticket-list.service';

@Component({
  selector: 'app-ticket-list',
  standalone: false,
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css',
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  ticketsFiltrados: any[] = [];
  loading = true;

  ticketId: string = ''

  // filtros
  selectedTecnico = 'Todos';
  selectedCliente = 'Todos';
  selectedPrioridade = 'Todos';
  selectedEquipe = 'Todas';
  selectedStatus = 'Todos';
  selectedAtendimento = 'Todos';

  getStatusLabel(status: number): string {
    const map: Record<number, string> = {
      0: 'Aberto',
      1: 'Andamento',
      2: 'Concluído',
      3: 'Fechado',
    };

    const num = Number(status);
    return map[num] || 'Desconhecido';
  }

  getTeamLabel(status: number): string {
    const map: Record<number, string> = {
      1: 'TI',
      2002: 'TI',
      2: 'Desenvolvimento',
      3: 'Segurança da Informação',
      4: 'Marketing',
    };

    const num = Number(status);
    return map[num] || 'Desconhecido';
  }

  getTicketPriority(status: number): string {
    const map: Record<number, string> = {
      0: 'Baixa',
      1: 'Normal',
      2: 'Alta',
      3: 'Crítica',
    };

    const num = Number(status);
    return map[num] || 'Desconhecido';
  }

  constructor(
    private authservice: AuthService,
    private ticketListService: TicketListService
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketListService.getTickets().subscribe({
      next: (data) => {
        console.log('Tickets recebidos:', data);
        this.ticketsFiltrados = data; // lista original
        this.tickets = data; // lista que será exibida / filtrada
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar tickets:', err);
        this.loading = false;
      },
    });
  }

  filterTickets() {
    this.tickets = this.ticketsFiltrados.filter((ticket) => {
      return (
        (this.selectedTecnico === 'Todos' ||
          ticket.user?.name?.firstName === this.selectedTecnico) &&
        (this.selectedCliente === 'Todos' ||
          ticket.clientName === this.selectedCliente) &&
        (this.selectedPrioridade === 'Todos' ||
          this.getTicketPriority(ticket.priority) ===
            this.selectedPrioridade) &&
        (this.selectedEquipe === 'Todas' ||
          this.getTeamLabel(ticket.teamId) === this.selectedEquipe) &&
        (this.selectedStatus === 'Todos' ||
          this.getStatusLabel(ticket.status) === this.selectedStatus) &&
        (this.selectedAtendimento === 'Todos' ||
          ticket.atendimento === this.selectedAtendimento)
      );
    });
  }

  searchTicket() {
  // Evita pesquisar se o campo estiver vazio
  if (!this.ticketId || this.ticketId.trim() === '') {
    console.warn('Informe um Ticket ID para pesquisar.');
    return;
  }

  this.ticketListService.getTicketById(this.ticketId).subscribe({
    next: (ticket) => {
      console.log('✅ Ticket encontrado:', ticket);

      // Aqui você pode atualizar a interface, por exemplo:
      // this.foundTicket = ticket;
    },
    error: (err) => {
      console.error('❌ Ticket não encontrado ou erro na requisição', err);

      // Opcional: você pode mostrar uma mensagem no UI
      // this.foundTicket = null;
    }
  });
}
}
