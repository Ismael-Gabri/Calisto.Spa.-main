import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketRegistrationService {
  private apiUrl = 'http://localhost:7230';

  constructor(private http: HttpClient, private router: Router) {}

CreateTicket(credentials: { title: string; description: string }): Observable<any> {
    const token = localStorage.getItem('token'); // pega o token do storage

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    console.log('Token:', token)

    // Apenas retorna o Observable, não faz navegação aqui
    return this.http.post(`${this.apiUrl}/ticket`, credentials, { headers });
  }
}
