import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  companyId: number;
  teamId: number;
  profileImage: string | null;
  name: {
    firstName: string;
    lastName: string;
  };
  email: {
    address: string;
  };
  // adicione outros campos se precisar
}

export interface Ticket {
  id: number;
  companyId: number;
  company: string | null;
  teamId: number;
  team: string | null;
  userId: number;
  user: User | null; // <-- mudou de string para User
  title: string;
  description: string;
  priority: number;
  status: number;
  creationDate: string;
  updateDate: string | null;
  resolutionDate: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class TicketListService {
  private apiUrl = 'http://localhost:7230'; // URL base da sua API

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/ticket`);
  }

  getTicketById(id: string): Observable<Ticket> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  });

  // Usa o ID na URL para buscar um ticket específico
  return this.http.get<Ticket>(`${this.apiUrl}/ticket/${id}`, { headers });
}
}
